import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('getBookingService', ({
  bookingRepository,
  date,
  config: { appConfig },
  constants
}) => {
  const { STUDENT_ROLE, TUTOR_ROLE } = constants
  const { MINUTES_GAP } = appConfig
  const { timeZoneStartDate, utc } = date
  const getBookings = async ({
    userId,
    userRole,
    limit,
    status,
    currentDate,
    offset = 0
  }) => {
    let bookingFilter = {}
    let slotFilter = {}
    let queryDate = new Date()
    queryDate.setMinutes(queryDate.getMinutes() - MINUTES_GAP)
    queryDate = utc(timeZoneStartDate(queryDate))
    if (status) {
      bookingFilter.status = {
        $in: ['booked', 'reserved']
      }
    }
    if (currentDate) {
      slotFilter = {
        $or: [
          {
            start_date: {
              $gte: queryDate
            }
          }
        ]
      }
    }

    switch (userRole) {
      case STUDENT_ROLE:
        bookingFilter.student_id = userId
        break
      case TUTOR_ROLE:
        bookingFilter.tutor_id = userId
    }
    const bookingsEntity = await bookingRepository.getAll(
      {
        where: bookingFilter,
        ...(limit ? { limit: limit * 1 } : {}),
        ...(offset ? { offset: offset * 1 } : {})
      },
      {
        where: slotFilter
      }
    )
    return bookingsEntity.getData()
  }

  const getUnResolvedBookings = async ({
    currentDate,
    offset = 0,
    userId

  }) => {
    let bookingFilter = {}
    let slotFilter = {}
    let queryDate = new Date()
    queryDate = utc(timeZoneStartDate(queryDate))

    bookingFilter.status = {
      $in: ['booked']
    }
    bookingFilter.tutor_id = userId

    if (currentDate) {
      slotFilter = {
        $or: [
          {
            start_date: {
              $lte: queryDate
            }
          }
        ]
      }
    }

    const bookingsEntity = await bookingRepository.getAll(
      {
        where: bookingFilter
      },
      {
        where: slotFilter,
      },
      'DESC'
    )
    return bookingsEntity.getData()
  }

  const getTutorOfLastSession = async ({ userId, courseId }) => {
    return bookingRepository.getTutorForLastBooking({
      studentId: userId,
      courseId
    })
  }

  const getBookingById = async ({ bookingId }) => {
    const booking = await bookingRepository.getBookingById({ bookingId })
    return booking.getData()
  }

  return {
    getBookings,
    getTutorOfLastSession,
    getBookingById,
    getUnResolvedBookings
  }
})
