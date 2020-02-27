import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('postBookingService', ({
  bookingRepository,
  date,
  constants,
  config: { appConfig },
  CustomError
}) => {
  const {
    BOOOKING_BOOKED,
    BOOKING_CANCELLED,
    BOOKING_CANNOT_CANCELLED,
    EXCEED_MAX_BOOKING_ALLOWED_PER_DAY,
    EXCEED_MAX_BOOKING_ALLOWED_PER_WEEK
  } = constants

  const { BOOKING_ALLOWED_PER_DAY, BOOKING_ALLOWED_PER_WEEK } = appConfig

  const createNewBooking = async ({
    slotId,
    sessionId,
    tutorId,
    studentId,
    courseId,
    bookingDate,
    isTrial = 0
  }) => {
    !isTrial &&
      (await validateBooking({
        studentId,
        courseId,
        bookingDate
      }))
    const bookings = await bookingRepository.createBooking({
      tutor_id: tutorId,
      course_id: courseId,
      student_id: studentId,
      slot_id: slotId,
      status: BOOOKING_BOOKED,
      created_by: studentId,
      updated_by: studentId,
      session_id: sessionId
    })
    return bookings
  }

  const createBooking = async data => bookingRepository.createBooking(data)

  const cancelBooking = async ({ bookingId, userId, currentDate }) => {
    const canCancelled = await validateCancelBooking({
      bookingId,
      currentDate
    })
    if (!canCancelled) {
      throw new CustomError(
        BOOKING_CANNOT_CANCELLED.code,
        BOOKING_CANNOT_CANCELLED.status
      )
    }

    await updateBooking({
      bookingId,
      userId,
      status: BOOKING_CANCELLED,
      tutor_id: null,
      slot_id: null
    })
  }

  const updateBooking = async ({ bookingId, userId, status }) => {
    await bookingRepository.updateBooking({
      bookingId,
      userId,
      status
    })
  }

  const validateCancelBooking = async ({ bookingId, currentDate }) => {
    const bookingEntity = await bookingRepository.getBookingById({
      bookingId
    })
    return bookingEntity.canCancelled(currentDate)
  }

  const countOfBookingForDay = async ({ bookingDate, studentId, courseId }) => {
    const bookingCountForDay = await bookingRepository.countOfBookingForDates({
      startDate: bookingDate,
      endDate: bookingDate,
      studentId,
      courseId
    })
    return bookingCountForDay
  }

  const countOfBookingForWeek = async ({
    bookingDate,
    studentId,
    courseId
  }) => {
    const dateRange = date.weeklyDateRange(bookingDate)
    const bookingCountForWeek = await bookingRepository.countOfBookingForDates({
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      studentId,
      courseId
    })
    return bookingCountForWeek
  }

  const validateBooking = async ({ bookingDate, studentId, courseId }) => {
    const isValidBookingForDay =
      (await countOfBookingForDay({
        bookingDate,
        studentId,
        courseId
      })) < BOOKING_ALLOWED_PER_DAY
    if (!isValidBookingForDay) {
      throw new CustomError(
        EXCEED_MAX_BOOKING_ALLOWED_PER_DAY.code,
        EXCEED_MAX_BOOKING_ALLOWED_PER_DAY.status
      )
    }

    const isValidBookingForWeek =
      (await countOfBookingForWeek({
        bookingDate,
        studentId,
        courseId
      })) < BOOKING_ALLOWED_PER_WEEK
    if (!isValidBookingForWeek) {
      throw new CustomError(
        EXCEED_MAX_BOOKING_ALLOWED_PER_WEEK.code,
        EXCEED_MAX_BOOKING_ALLOWED_PER_WEEK.status
      )
    }
  }

  return {
    createNewBooking,
    updateBooking,
    cancelBooking,
    createBooking
  }
})
