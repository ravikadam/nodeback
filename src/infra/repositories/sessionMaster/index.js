import { define } from '../../../containerHelper'

module.exports = define('sessionMasterRepository', ({
  database,
  sessionDomain,
  sessionMasterDomain,
  constants
}) => {
  const sessionMasterModel = database['session_master']
  const sessionModel = database['sessions']
  const courseModel = database['course']
  const studentCourseModel = database['student_course']

  const getTrialSessionByStudent = studentId =>
    sessionMasterModel
      .findOne({
        raw: true,
        attributes: ['id', 'course_id'],
        where: {
          is_trial: true
        },
        include: [
          {
            model: courseModel,
            attributes: [],
            include: [
              {
                model: studentCourseModel,
                attributes: [],
                where: {
                  student_id: studentId
                }
              }
            ]
          }
        ]
      })
      .then(entity => {
        return entity
      })

  const getTrialSessionByCourse = courseId =>
    sessionMasterModel
      .findOne({
        raw: true,
        where: {
          course_id: courseId,
          is_trial: true
        }
      })
      .then(sessionMaster => {
        return sessionMaster ? sessionMaster.id : ''
      })

  const getAllByCourseId = ({ userId, courseId }) =>
    sessionMasterModel.findAll({
      nest: true,
      where: {
        course_id: courseId
      },
      order: [['sort', 'ASC']],
      attributes: [
        'id',
        'name',
        'sort',
        'session_number',
        'description',
        'is_trial'
      ],
      include: [
        {
          model: sessionModel,
          where: {
            student_id: userId
          },
          required: false,
          attributes: ['id', 'status']
        }
      ]
    })

  const getNextSessionToBeBooked = ({ studentId, courseId }) =>
    sessionMasterModel
      .findOne({
        nest: true,
        subQuery: false,
        where: {
          course_id: courseId,
          $or: [
            {
              '$sessions.status$': constants.SESSION_OPEN
            },
            {
              '$sessions.id$': null
            }
          ]
        },
        order: [['sort', 'ASC']],
        attributes: [
          'id',
          'name',
          'session_number',
          'document_url',
          'is_trial'
        ],
        include: [
          {
            model: sessionModel,
            required: false,
            where: {
              student_id: studentId,
              course_id: courseId
            },
            attributes: ['id', 'status']
          }
        ]
      })
      .then(entity => (entity ? sessionMasterDomain(entity) : entity))

  return {
    getTrialSessionByCourse,
    getTrialSessionByStudent,
    getAllByCourseId,
    getNextSessionToBeBooked
  }
})
