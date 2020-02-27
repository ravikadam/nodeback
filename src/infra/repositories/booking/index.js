import { define } from '../../../containerHelper'
import { pluck } from 'ramda'

module.exports = define('bookingRepository', ({
  database,
  bookingDomain,
  bookingsDomain,
  constants
}) => {
  const bookingModel = database['booking']
  const slotModel = database['slot']
  const userModel = database['user']
  const sessionsModel = database['sessions']
  const sessionMasterModel = database['session_master']
  const activitesModel = database['session_activity']
  const toEntity = bookingDomain

  const createBooking = bookingEntity =>
    bookingModel.create(bookingEntity).then(entity => toEntity(entity))

  const isTrialBookingCreated = studentId =>
    bookingModel
      .findAll({
        raw: true,
        where: {
          student_id: studentId
        }
      })
      .then(booking => {
        return booking ? booking.length > 0 : false
      })

  const getAllBookingId = async (bookingArgs, slotArgs) =>
    bookingModel
      .findAll({
        ...bookingArgs,
        nest: true,
        subQuery: false,
        attributes: ['id'],
        order: [[slotModel, 'start_date', 'ASC']],
        include: [
          {
            ...slotArgs,
            model: slotModel,
            required: true,
            attributes: []
          }
        ]
      })
      .then(entities => pluck('id', entities))

  const getAll = async (bookingArgs, slotArgs, order='ASC') =>
    getAllBookingId(bookingArgs, slotArgs)
      .then(ids =>
        bookingModel.findAll({
          where: {
            id: {
              $in: ids
            }
          },
          nest: true,
          subQuery: false,
          attributes: ['id'],
          order: [[slotModel, 'start_date', order]],
          include: [
            {
              model: slotModel,
              required: true,
              attributes: ['id', 'tutor_id', 'start_date', 'end_date', 'status']
            },
            {
              model: userModel,
              as: 'tutor',
              required: true,
              attributes: ['id', 'name', 'mobile', 'room_url']
            },
            {
              model: userModel,
              as: 'student',
              required: true,
              attributes: ['id', 'name', 'mobile']
            },
            {
              model: sessionsModel,
              required: true,
              attributes: ['id'],
              include: [
                {
                  model: sessionMasterModel,
                  required: true,
                  attributes: [
                    'id',
                    'name',
                    'session_number',
                    'is_trial',
                    'document_url'
                  ]
                },
                {
                  model: activitesModel,
                  as: 'activities',
                  required: true,
                  attributes: ['id', 'name', 'link', 'type', 'sort'],
                  where: {
                    is_active: true
                  }
                }
              ]
            }
          ]
        })
      )
      .then(entities => {
        return bookingsDomain({
          bookings: entities
        })
      })

  const updateBooking = ({ userId, bookingId, status }) =>
    bookingModel.update(
      {
        updated_by: userId,
        status: status
      },
      {
        where: {
          id: bookingId
        },
        nest: true,
        subQuery: false,
        attributes: ['id'],
        order: [[slotModel, 'start_date', 'ASC']],
        include: [
          {
            model: slotModel,
            required: true,
            attributes: ['id', 'tutor_id', 'start_date', 'end_date', 'status']
          },
          {
            model: userModel,
            as: 'tutor',
            required: true,
            attributes: ['id', 'name', 'mobile']
          },
          {
            model: userModel,
            as: 'student',
            required: true,
            attributes: ['id', 'name']
          },
          {
            model: sessionsModel,
            required: true,
            attributes: ['id'],
            include: [
              {
                model: sessionMasterModel,
                required: true,
                attributes: [
                  'id',
                  'name',
                  'session_number',
                  'is_trial',
                  'document_url'
                ]
              },
              {
                model: activitesModel,
                as: 'activities',
                required: true,
                attributes: ['id', 'name', 'link', 'type', 'sort'],
                where: {
                  is_active: true
                }
              }
            ]
          }
        ]
      }
    )

  const getTutorForLastBooking = ({ studentId, courseId }) =>
    bookingModel.findOne({
      where: {
        student_id: studentId,
        course_id: courseId
      },
      raw: true,
      order: [['updated_at', 'DESC']],
      attributes: ['tutor_id']
    })

  const getBookingById = ({ bookingId, meetingUrl = '' }) =>
    bookingModel
      .findOne({
        where: {
          id: bookingId
        },
        nest: true,
        subQuery: false,
        attributes: ['id'],
        order: [[slotModel, 'start_date', 'ASC']],
        include: [
          {
            model: slotModel,
            required: true,
            attributes: ['id', 'tutor_id', 'start_date', 'end_date', 'status']
          },
          {
            model: userModel,
            as: 'tutor',
            required: true,
            attributes: ['id', 'name', 'mobile']
          },
          {
            model: userModel,
            as: 'student',
            required: true,
            attributes: ['id', 'name']
          },
          {
            model: sessionsModel,
            required: true,
            attributes: ['id'],
            include: [
              {
                model: sessionMasterModel,
                required: true,
                attributes: [
                  'id',
                  'name',
                  'session_number',
                  'is_trial',
                  'document_url'
                ]
              },
              {
                model: activitesModel,
                as: 'activities',
                required: true,
                attributes: ['id', 'name', 'link', 'type', 'sort'],
                where: {
                  is_active: true
                }
              }
            ]
          }
        ]
      })
      .then(entity => {
        entity.meeting_url = meetingUrl
        return bookingDomain(entity)
      })

  const countOfBookingForDates = ({
    startDate,
    endDate,
    studentId,
    courseId
  }) =>
    bookingModel.count({
      subQuery: false,
      where: {
        student_id: studentId,
        course_id: courseId,
        status: {
          $ne: constants.BOOKING_CANCELLED
        }
      },
      include: [
        {
          model: slotModel,
          required: true,
          attributes: [],
          where: {
            start_date: {
              $gte: new Date(startDate)
            },
            end_date: {
              $lte: new Date(endDate)
            }
          }
        }
      ]
    })

  return {
    createBooking,
    getAll,
    isTrialBookingCreated,
    getTutorForLastBooking,
    updateBooking,
    getBookingById,
    countOfBookingForDates
  }
})
