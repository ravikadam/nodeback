import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('sessionFacade', ({
  getSessionService,
  postCommunicationService,
  postBookingService,
  getBookingService,
  constants,
  postCreditService,
  postCourseService,
  postSessionService,
  postEventService,
  transactionDecorator: { transaction }
}) => {
  const {
    BOOKING_END,
    BOOKING_TECH_NOSHOW,
    BOOKING_NOSHOW,
    SESSION_TECH_NOSHOW,
    SESSION_NOSHOW,
    SESSION_END,
    STUDENT_SCHEDULED_TRIAL_STATUS,
    STUDENT_TRIAL_COMPLETED_STATUS,
    SESSION_BOOKED,
    SESSION_RESERVED,
    CLASS_ENDED_EVENT
  } = constants
  const startSession = async args =>
    getBookingService.getBookingById({ bookingId: args.bookingId })

  const getNextSessionToBeBooked = async args =>
    getSessionService.getNextSessionToBeBooked(args)
  const getAllSessionMaster = async args =>
    getSessionService.getAllSessionMaster(args)
  const endSession = async ({ bookingId, userId, sessionId, isTrial, tutor_comment }) => {
    let booking = await getBookingService.getBookingById({
      bookingId
    })
    let clazz = await getSessionService.getSessionById(sessionId)

    if (clazz.status === SESSION_BOOKED || clazz.status === SESSION_RESERVED) {
      let updateBooking = postBookingService.updateBooking({
        bookingId,
        userId,
        status: BOOKING_END

      })
      let updateSession = postSessionService.updateSession({
        sessionId,
        userId,
        status: SESSION_END,
        tutor_comment: tutor_comment
      })

      const creditToTutor = postCreditService.addCredit({
        userId: booking.tutor.id,
        slotId: booking.slot.id,
        sessionId: booking.session.id,
        bookingId: bookingId,
        isTrial: isTrial,
        auditUser: userId
      })

      const deductCreditFromStudent = postCreditService.addCredit({
        userId: booking.student.id,
        slotId: booking.slot.id,
        sessionId: booking.session.id,
        bookingId: bookingId,
        isTrial: isTrial,
        auditUser: userId
      })

      const updateStudentCourseStatus = postCourseService.updateStudentCourseStatus(
        {
          studentId: booking.student.id,
          courseId: clazz.course_id,
          status: STUDENT_TRIAL_COMPLETED_STATUS,
          fromStatus: STUDENT_SCHEDULED_TRIAL_STATUS
        }
      )

      const result = [
        await updateBooking,
        await updateSession,
        await creditToTutor,
        await deductCreditFromStudent,
        await updateStudentCourseStatus
      ]
      if (isTrial){
        console.log("publishing event to sns")
        await postEventService.publishEvent(CLASS_ENDED_EVENT,
          {
            studentId: booking.student.id,
            tutorId: booking.tutor.id,
            slotId: booking.slot.id
          }
        )
      }
      
    }
  }

  const endSessionNoShow = async ({
    bookingId,
    userId,
    sessionId,
    isTrial,
    tutor_comment
  }) => {
    let booking = await getBookingService.getBookingById({
      bookingId
    })

    // console.log('BKBK', booking) // WHY ARE WE GETTING THIS BIG OBJECT?
    let clazz = await getSessionService.getSessionById(sessionId)

    if (clazz.status === SESSION_BOOKED || clazz.status === SESSION_RESERVED) {
      let updateBooking = postBookingService.updateBooking({
        bookingId,
        userId,
        status: BOOKING_NOSHOW
      })
      let updateSession = postSessionService.updateSession({
        sessionId,
        userId,
        status: SESSION_NOSHOW,
        tutor_comment: tutor_comment
      })

      const creditToTutor = postCreditService.addCredit({
        userId: booking.tutor.id,
        slotId: booking.slot.id,
        sessionId: booking.session.id,
        bookingId: bookingId,
        isTrial: isTrial,
        auditUser: userId
      })

      const deductCreditFromStudent = postCreditService.addCredit({
        userId: booking.student.id,
        slotId: booking.slot.id,
        sessionId: booking.session.id,
        bookingId: bookingId,
        isTrial: isTrial,
        auditUser: userId
      })

      const result = [
        await updateBooking,
        await updateSession,
        await creditToTutor,
        await deductCreditFromStudent
      ]
      postCommunicationService.noshow(
        booking.student.id,
        booking.tutor.id,
        booking.slot.id,
        'noshow'
      )
    }
  }
  const endSessionNoShowTech = async ({
    bookingId,
    userId,
    sessionId,
    isTrial,
    tutor_comment
  }) => {
    let booking = await getBookingService.getBookingById({
      bookingId
    })
    let clazz = await getSessionService.getSessionById(sessionId)

    if (clazz.status === SESSION_BOOKED || clazz.status === SESSION_RESERVED) {
      let updateBooking = postBookingService.updateBooking({
        bookingId,
        userId,
        status: BOOKING_TECH_NOSHOW
      })
      let updateSession = postSessionService.updateSession({
        sessionId,
        userId,
        status: SESSION_TECH_NOSHOW,
        tutor_comment: tutor_comment
      })

      const creditToTutor = postCreditService.addCredit({
        userId: booking.tutor.id,
        slotId: booking.slot.id,
        sessionId: booking.session.id,
        bookingId: bookingId,
        isTrial: isTrial,
        auditUser: userId
      })
      const result = [
        await updateBooking,
        await updateSession,
        await creditToTutor
      ]
      postCommunicationService.noshow(
        booking.student.id,
        booking.tutor.id,
        booking.slot.id,
        'noshow'
      )
    }
  }

  return {
    startSession: transaction(startSession),
    getNextSessionToBeBooked,
    getAllSessionMaster,
    endSession: transaction(endSession),
    endSessionNoShow: transaction(endSessionNoShow),
    endSessionNoShowTech: transaction(endSessionNoShowTech)
  }
})
