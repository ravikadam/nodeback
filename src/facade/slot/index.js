import { define } from '../../containerHelper'

/**
 * function for getter slots.
 */
module.exports = define('slotFacade', ({
  getSlotService,
  postSlotService,
  getCourseService,
  date,
  getSessionService,
  getSessionMasterService,
  postSessionService,
  postBookingService,
  postCourseService,
  postCommunicationService,
  getUserService,
  postEventService,
  emailService,
  config: { appConfig },
  constants: {
    SLOT_BOOKED,
    SLOT_RESERVED,
    BOOOKING_BOOKED,
    STUDENT_SCHEDULED_TRIAL_STATUS,
    STUDENT_TRIAL_TO_BE_SCHEDULED_STATUS,
    TRIAL_BOOKED_EVENT
  },
  transactionDecorator: { transaction }
}) => {
  const { MAX_BATCH_SIZE, IMPACTED_MINUTES_GAP } = appConfig

  const {
    timeZoneDate,
    queryFormat,
    addMinutes,
    timeFormatZone,
    userFormatZone
  } = date
  const getTutorSlots = async (req,args) =>
    getSlotService.getAllSlotsForDateRange(req,args)

  const getStudentPaidSlots = async args =>
    getSlotService.getPaidSlotForTutor(args)

  const getStudentBookedSlots = async args =>
    getSlotService.getStudentBookedSlots(args)

  const getDateRangeForTutorSlots = async args =>
    getSlotService.getDateRangeForSlot(args)

  const saveTutorSlots = async (args, params) =>
    postSlotService.createOrUpdateSlots(args, params)

  const copyTutorSlotFromLastWeek = async (args, params) =>
    postSlotService.copyFromPreviousWeek(args, params)

  const getStudentTrialSlots = async args => {
    let course = await getCourseService.getCourseByStudentId(args.studentId)
    if (args.isAdmin) {
      const slots = await getSlotService.getTrialSlots({
        isAdmin: args.isAdmin,
        courseId: course.id,
        ...args
      })
      if (slots && slots.slots && slots.slots.length > 0) {
        let sessions = await getSessionService.getTrialSessions({
          courseId: course.id,
          ...args
        })
        if (sessions && sessions.length > 0) {
          let selSlots = []
          for (let i = 0; i < slots.slots.length; i++) {
            let selSession = sessions.filter(s => {
              return (
                slots.slots[i].start_date == timeZoneDate(s.start_date) &&
                slots.slots[i].slot_config_id == s.slot_config_id
              )
            })
            //1 to many bookings.
            if (
              !(
                selSession &&
                selSession.session_count &&
                selSession.session_count >= slots.slots[i].slotCount * 3
              )
            )
              selSlots.push(slots.slots[i])
          }

          return selSlots
        }
      }

      return slots
    } else
      return getSlotService.getTrialSlots({
        isAdmin: args.isAdmin,
        courseId: course.id,
        ...args
      })
  }

  const getSlotDetailsById = async id =>
    getSlotService.getSlotById(id)

  const getTutorsBasedOnAvailability = async args =>
    getSlotService.getTutorsBasedOnAvailability(args)

  const isTrialScheduled = async args => getSlotService.isTrialScheduled(args)

  const bookTrialSlot = async ({ data, studentId }) => {
    const sessionMasterInfo = await getSessionMasterService.getTrialSessionByStudent(
      studentId
    )
    let numReservations = 0
    let slotToBook = await getSessionService.getSlotToBookTrial({
      startDate: data.start_date,
      slotConfigId: data.slot_config_id,
      courseId: sessionMasterInfo.course_id
    })
    if (slotToBook) numReservations = slotToBook.reservations_count
    else {
      const slotsToBook = await getSlotService.getOpenSlotToBookTrial({
        startDate: data.start_date,
        slotConfigId: data.slot_config_id,
        courseId: sessionMasterInfo.course_id
      })

      if (slotsToBook && slotsToBook.length > 0) slotToBook = slotsToBook[0]
    }

    if (!slotToBook) return false

    if (numReservations == 0)
      await postSlotService.closeImpactedSlots({
        tutorId: slotToBook.tutor_id,
        startDates: [
          queryFormat(addMinutes(slotToBook.start_date, IMPACTED_MINUTES_GAP)),
          queryFormat(addMinutes(slotToBook.start_date, -IMPACTED_MINUTES_GAP))
        ]
      })

    let sessionEntity = {
      tutor_id: slotToBook.tutor_id,
      course_id: sessionMasterInfo.course_id,
      student_id: studentId,
      slot_id: slotToBook.id,
      status: SLOT_RESERVED,
      created_by: studentId,
      updated_by: studentId,
      is_reschedulable: false,
      session_master_id: sessionMasterInfo.id,
      is_trial: true
    }
    let s = await postSessionService.createSession(sessionEntity)
    if (slotToBook.status != SLOT_RESERVED && slotToBook.status != SLOT_BOOKED)
      await postSlotService.reserveTrialSlot({ id: slotToBook.id })
    else if (
      slotToBook.status != SLOT_BOOKED &&
      numReservations > MAX_BATCH_SIZE - 2
    )
      await postSlotService.bookTrialSlot({ id: slotToBook.id })

    let bookingEntity = {
      tutor_id: slotToBook.tutor_id,
      course_id: sessionMasterInfo.course_id,
      student_id: studentId,
      slot_id: slotToBook.id,
      status: BOOOKING_BOOKED,
      created_by: studentId,
      updated_by: studentId,
      session_id: s.id
    }
    await postBookingService.createBooking(bookingEntity)
    await postCourseService.updateStudentCourseStatus({
      courseId: sessionMasterInfo.course_id,
      studentId: studentId,
      status: STUDENT_SCHEDULED_TRIAL_STATUS,
      fromStatus: STUDENT_TRIAL_TO_BE_SCHEDULED_STATUS
    })
    /* await postEventService.publishEvent(TRIAL_BOOKED_EVENT,
      {
        studentId: studentId,
        tutorId: slotToBook.tutor_id,
        sessionId: s.id
      }
    ) */
    await postCommunicationService.trialBooked(
      slotToBook.tutor_id,
      studentId,
      data.start_date
    )
    return true
  }

  const sendAdhocTrialBookingMail = async ({
    tutorId,
    studentId,
    slotDate
  }) => {
    const [student, tutor, secret] = await Promise.all([
      getUserService.getUserById(studentId),
      getUserService.getUserById(tutorId),
      getUserService.getSecret(studentId)
    ])
    emailService.sendAdhocTrialBookingMail({
      tutor: tutor,
      student: student,
      slotDate: slotDate
    })
  }

  const sendDiwaliDhamaka = async emails => {
    await emailService.sendDiwaliDhamaka(emails)
  }

  return {
    getTutorSlots,
    sendDiwaliDhamaka,
    sendAdhocTrialBookingMail,
    getStudentPaidSlots,
    getStudentBookedSlots,
    getDateRangeForTutorSlots,
    saveTutorSlots: transaction(saveTutorSlots),
    copyTutorSlotFromLastWeek: transaction(copyTutorSlotFromLastWeek),
    getStudentTrialSlots,
    getSlotDetailsById,
    getTutorsBasedOnAvailability,
    isTrialScheduled,
    bookTrialSlot: transaction(bookTrialSlot)
  }
})
