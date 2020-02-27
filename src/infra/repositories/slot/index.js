import { define } from '../../../containerHelper'

module.exports = define('slotRepository', ({
  database,
  slotConfigsDomain,
  slotsDomain,
  slotDomain,
  constants,
  date
}) => {
  const slotConfigModel = database['slot_config']
  const slotModel = database['slot']
  const bookingModel = database['booking']
  const tutorModel = database['user']
  const studentModel = database['user']
  const tutorCourseModel = database['tutor_course']
  const studentCourseModel = database['student_course']
  const sessionsModel = database['sessions']
  const Op = database.sequelize.Op
  const sequelize = database.sequelize
  const { timeZoneDate, utc } = date

  const getAllConfigs = ({ startDate, endDate }) =>
    slotConfigModel
      .findAll({
        where: {
          [Op.or]: [
            { slot_config_type: constants.DAY_WISE },
            {
              [Op.and]: {
                slot_config_type: constants.DATE_WISE,
                start_date: {
                  [Op.gte]: new Date(startDate)
                },
                end_date: {
                  [Op.lte]: new Date(endDate)
                }
              }
            }
          ]
        },
        order: [['order', 'ASC']]
      })
      .then(entity => slotConfigsDomain({ slots: entity }))

  const getSlotsForTutor = ({ tutorId, startDate, endDate, status }) =>
    slotModel
      .findAll({
        raw: true,
        where: {
          tutor_id: tutorId,
          start_date: {
            [Op.gte]: new Date(startDate)
          },
          end_date: {
            [Op.lt]: new Date(endDate)
          },
          ...(status
            ? {
                status
              }
            : {})
        }
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const getSlotById = id =>
    slotModel
      .findOne({
        raw: true,
        where: {
          id: id
        }
      })
      .then(data => {
        if (!data) return null
        return slotDomain(data)
      })

  const getSlotsByIds = ({ tutorId }, ids) =>
    slotModel
      .findAll({
        raw: true,
        where: {
          tutor_id: tutorId,
          id: {
            $in: ids
          }
        }
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const upsertSlots = slots =>
    slotModel
      .bulkCreate(slots, {
        updateOnDuplicate: ['status', 'updated_by', 'updated_at']
      })
      .then(entity => {
        let ents = []
        entity.forEach(element => {
          if (element) ents.push(slotDomain(element.dataValues))
        })

        return slotsDomain({ slots: ents })
      })

  const checkSlotExist = ({ tutorId }) =>
    slotModel
      .findOne({
        raw: true,
        where: {
          tutor_id: tutorId
        }
      })
      .then(data => {
        if (!data) return false
        return true
      })

  const getMaxSlotDate = ({ tutorId }) =>
    slotModel
      .max('start_date', {
        where: {
          tutor_id: tutorId
        }
      })
      .then(max => {
        return max ? timeZoneDate(max) : null
      })

  const getNonEditableSlots = ({ tutorId }, ids) =>
    slotModel
      .findAll({
        raw: true,
        where: {
          tutor_id: tutorId,
          id: {
            $in: ids
          },
          status: {
            [Op.notIn]: [constants.SLOT_OPEN, constants.SLOT_CLOSED]
          }
        }
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const getOpenSlotToBookTrial = ({ startDate, slotConfigId, courseId }) =>
    slotModel
      .findAll({
        raw: true,
        attributes: ['id', 'tutor_id', 'start_date', 'status'],
        order: [[tutorModel, 'rank', 'ASC']],
        where: {
          status: { [Op.in]: ['open'] },
          start_date: utc(startDate),
          slot_config_id: slotConfigId
        },
        include: [
          {
            model: tutorModel,
            attributes: [],
            where: {
              role: 'tutor'
            },
            include: [
              {
                model: tutorCourseModel,
                attributes: [],
                where: {
                  course_id: courseId
                }
              }
            ]
          }
        ]
      })
      .then(entity => {
        return entity
      })

  const getTrialSlots = ({ courseId, startDate, endDate }) =>
    slotModel
      .findAll({
        raw: true,
        group: ['start_date', 'slot_config_id'],
        attributes: [
          'start_date',
          [sequelize.fn('MAX', sequelize.col('slot.status')), 'status'],
          'slot_config_id',
          [sequelize.fn('COUNT', sequelize.col('slot.id')), 'slot_count']
        ],
        where: {
          status: { [Op.in]: ['open', 'reserved'] },
          start_date: {
            [Op.between]: [new Date(startDate), new Date(endDate)]
          },
          $or: [
            {
              '$sessions.student_id$': null
            },
            {
              '$sessions->student->student_courses.id$': {
                [Op.ne]: null
              }
            }
          ]
        },
        include: [
          {
            model: slotConfigModel,
            attributes: [],
            where: {
              type: { [Op.notIn]: [constants.PAID] }
            }
          },
          {
            model: sessionsModel,
            required: false,
            attributes: [],
            include: [
              {
                model: studentModel,
                as: 'student',
                required: false,
                attributes: [],
                include: [
                  {
                    model: studentCourseModel,
                    required: false,
                    where: {
                      course_id: courseId
                    },
                    attributes: []
                  }
                ]
              }
            ]
          },
          {
            model: tutorModel,
            attributes: [],
            where: {
              role: 'tutor'
            },
            include: [
              {
                model: tutorCourseModel,
                attributes: [],
                where: {
                  course_id: courseId
                }
              }
            ]
          }
        ]
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const closeImpactedSlots = ({ tutorId, startDates }) =>
    slotModel
      .update(
        { status: constants.SLOT_CLOSED },
        {
          where: {
            start_date: { [Op.in]: startDates },
            status: constants.SLOT_OPEN,
            tutor_id: tutorId
          }
        }
      )
      .then(entity => {
        return entity
      })

  const reserveTrialSlot = ({ id }) =>
    slotModel
      .update(
        { status: constants.SLOT_RESERVED },
        {
          where: {
            id: id
          }
        }
      )
      .then(entity => {
        return entity
      })

  const bookTrialSlot = ({ id }) =>
    slotModel
      .update(
        { status: constants.SLOT_BOOKED },
        {
          where: {
            id: id
          }
        }
      )
      .then(entity => {
        return entity
      })

  const getTutorsSlotCount = async ({ limit, startDate, endDate }) =>
    slotModel.findAll({
      attributes: ['tutor_id', [sequelize.fn('count', 1), 'no_slots']],
      limit,
      raw: true,
      subQuery: false,
      order: [[sequelize.literal('no_slots'), 'DESC']],
      group: 'tutor_id',
      where: {
        start_date: {
          [Op.gte]: new Date(startDate)
        },
        end_date: {
          [Op.lte]: new Date(endDate)
        },
        status: {
          [Op.in]: [constants.SLOT_OPEN]
        }
      },
      include: [
        {
          model: slotConfigModel,
          required: true,
          attributes: [],
          where: { type: { [Op.notIn]: [constants.TRIAL] } }
        }
      ]
    })

  const getPaidSlotsForTutor = ({ tutorId, startDate, endDate }) =>
    slotModel
      .findAll({
        raw: true,
        where: {
          tutor_id: tutorId,
          start_date: {
            [Op.gte]: new Date(startDate)
          },
          end_date: {
            [Op.lte]: new Date(endDate)
          },
          status: {
            [Op.in]: [constants.SLOT_OPEN]
          }
        },
        include: [
          {
            model: slotConfigModel,
            required: true,
            attributes: [],
            where: { type: { [Op.notIn]: [constants.TRIAL] } }
          }
        ]
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const getSlotsBookedByStudent = ({ studentId }) =>
    slotModel
      .findAll({
        raw: true,
        include: [
          {
            model: bookingModel,
            required: true,
            attributes: [],
            where: {
              student_id: studentId,
              status: { [Op.notIn]: [constants.BOOKING_CANCELLED] }
            }
          }
        ]
      })
      .then(entity => {
        return slotsDomain({ slots: entity })
      })

  const update = (...args) => slotModel.update(...args)

  return {
    getAllConfigs,
    getSlotsForTutor,
    upsertSlots,
    checkSlotExist,
    getMaxSlotDate,
    getNonEditableSlots,
    getSlotsByIds,
    getTrialSlots,
    getSlotById,
    reserveTrialSlot,
    bookTrialSlot,
    getTutorsSlotCount,
    closeImpactedSlots,
    getPaidSlotsForTutor,
    getOpenSlotToBookTrial,
    getSlotsBookedByStudent,
    update
  }
})
