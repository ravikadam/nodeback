import { define } from '../../../containerHelper'

module.exports = define('sessionsRepository', ({
  database,
  sessionDomain,
  sessionMasterDomain,
  sessionsDomain,
  config: { appConfig },
  date,
  constants
}) => {
  const { MAX_BATCH_SIZE } = appConfig
  const sessionModel = database['sessions']
  const sessionMasterModel = database['session_master']
  const slotModel = database['slot']
  const toEntity = sessionDomain
  const Op = database.sequelize.Op
  const sequelize = database.sequelize
  const { utc } = date

  const createSession = sessionEntity =>
    sessionModel.create(sessionEntity).then(entity => toEntity(entity))

  const sessionByMasterId = async ({ sessionMasterId, studentId, courseId }) =>
    sessionModel.findOne({
      raw: true,
      where: {
        session_master_id: sessionMasterId,
        student_id: studentId,
        course_id: courseId
      },
      attributes: ['id', 'status']
    })

  const getSessionsByScheduledDate = async ({ studentId, courseId }) =>
    sessionModel
      .findAll({
        raw: true,
        nest: true,
        subQuery: false,
        where: {
          student_id: studentId,
          course_id: courseId
        },
        attributes: ['id', 'status', 'slot_id'],
        order: [[slotModel, 'start_date', 'ASC']],
        include: [
          {
            model: slotModel,
            required: false,
            attributes: ['id', 'start_date', 'end_date']
          },
          {
            model: sessionMasterModel,
            required: true,
            attributes: ['sort', 'id', 'name', 'document_url', 'session_number']
          }
        ]
      })
      .then(entities => {
        return sessionsDomain({
          sessions: entities
        })
      })

  const update = (...args) => sessionModel.update(...args)

  const getSlotToBookTrial = ({ startDate, slotConfigId, courseId }) =>
    sessionModel
      .findOne({
        raw: true,
        group: ['tutor_id'],
        attributes: [
          [sequelize.fn('MAX', sequelize.col('slot.id')), 'id'],
          [sequelize.fn('MAX', sequelize.col('slot.start_date')), 'start_date'],
          [sequelize.fn('MAX', sequelize.col('slot.status')), 'status'],
          [
            sequelize.fn('COUNT', sequelize.col('sessions.id')),
            'reservations_count'
          ],
          'tutor_id'
        ],
        having: sequelize.literal('count(sessions.id) < ' + MAX_BATCH_SIZE),
        where: {
          course_id: courseId
        },
        include: [
          {
            model: slotModel,
            attributes: [],
            where: {
              start_date: utc(startDate),
              slot_config_id: slotConfigId
            }
          }
        ]
      })
      .then(entity => {
        return entity
      })

  const getTrialSessions = ({ courseId, startDate, endDate }) =>
    sessionModel
      .findAll({
        raw: true,
        group: ['slot.start_date', 'slot.slot_config_id'],
        attributes: [
          'id',
          'slot.start_date',
          'slot.slot_config_id',
          [sequelize.fn('MAX', sequelize.col('session.status')), 'status'],
          [sequelize.fn('COUNT', sequelize.col('session.id')), 'session_count']
        ],
        where: {
          course_id: courseId
        },
        include: [
          {
            model: slotModel,
            attributes: [],
            where: {
              start_date: {
                [Op.gte]: new Date(startDate)
              },
              end_date: {
                [Op.lte]: new Date(endDate)
              }
            }
          }
        ]
      })
      .then(entity => {
        return entity
      })

  const getSessionById = sessionId =>
    sessionModel
      .findOne({
        raw: true,
        where: {
          id: sessionId
        },
        attributes: ['id', 'status', 'course_id', 'tutor_comment']
      })
      .then(entity => {
        return toEntity(entity)
      })

  const upsertSessions = sessions =>
    sessionModel
      .bulkCreate(sessions, {
        updateOnDuplicate: ['session_master_id', 'updated_by', 'updated_at']
      })
      .then(dataValues =>
        sessionsDomain({
          sessions: dataValues
        })
      )

  return {
    createSession,
    update,
    sessionByMasterId,
    getSessionsByScheduledDate,
    getSlotToBookTrial,
    upsertSessions,
    getTrialSessions,
    getSessionById
  }
})
