import { define } from '../../containerHelper'
import { compose } from 'ramda'
import uidv4 from 'uuid/v4'

/**
 * function for getter user.
 */
module.exports = define('getSlotService', ({
  slotRepository,
  slotConfigsDomain,
  slotsDomain,
  bookingRepository,
  config: { appConfig },
  date
}) => {
  const {
    NEW_TUTOR_SCHEDULE_DAYS,
    EXISTING_TUTOR_SCHEDULE_DAYS,
    MINIMUM_DAYS_TUTOR_OPEN_SLOT,
    MAXIMUM_DAYS_OPEN_TRIAL_SLOT,
    PAID_SCHEDULE_DAYS,
    MINUTES_GAP
  } = appConfig
  const {
    addDays,
    format,
    timeZoneDate,
    timeZoneStartDate,
    utc,
    timeFormatforDate,
    differenceInDays,
    getDayOfWeek,
    combineDateTimeTZ
  } = date
  // code for getting all the items
  const getSlotConfigs = async data => {
    const slotConfigs = await slotRepository.getAllConfigs(data)
    return slotConfigs.getData()
  }

  const getPaidSlotForTutor = async ({
    startDate,
    status,
    tutorId,
    courseId
  }) => {
    let endDate = format(addDays(startDate, PAID_SCHEDULE_DAYS))
    const slots = await slotRepository.getPaidSlotsForTutor({
      startDate,
      endDate: format(addDays(endDate, 1)),
      ...(status ? { status } : {}),
      tutorId,
      courseId
    })
    return {
      ...slots.getData(),
      end_date: endDate
    }
  }

  const getStudentBookedSlots = async ({ studentId, courseId }) => {
    const bookedSlots = await slotRepository.getSlotsBookedByStudent({
      studentId,
      courseId
    })

    return bookedSlots.getData()
  }

  const getSlotForTutor = async ({
    startDate,
    endDate,
    status,
    tutorId,
    courseId
  }) => {
    const slots = await slotRepository.getSlotsForTutor({
      startDate: utc(timeZoneStartDate(startDate)),
      endDate: utc(timeZoneStartDate(addDays(endDate, 1))),
      ...(status ? { status } : {}),
      tutorId,
      courseId
    })
    return slots.getData()
  }

  const getAllSlotsForDateRange = async (req,data) => {
    const timezone=req.user.timezone
    const masterSlots = await getSlotConfigs(data)
    const slots = await getSlotForTutor(data)
    const numDays = differenceInDays(data.startDate, data.endDate)
    const DayofWeek = [
      '',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
    let retSlots = []
    for (let i = 0; i <= numDays; i++) {
      let curDate = format(addDays(data.startDate, i))
      let curDay = DayofWeek[getDayOfWeek(addDays(data.startDate, i))]
      let curConfigs = masterSlots.slots.filter(
        sc =>
          sc.day == curDay && sc.slot_config_type == 'day_wise' && sc.is_active
      )
      let curSlots = slots.slots.filter(
        s => s.start_date && s.start_date.indexOf(curDate) >= 0
      )
      if (curConfigs && curConfigs.length > 0) {
        for (let j = 0; j < curConfigs.length; j++) {
          let sl
          if (curSlots && curSlots.length > 0)
            sl = curSlots.find(function(s) {
              return s.slot_config_id == curConfigs[j].id
            })

          if (!sl)
            sl = {
              id: uidv4(),
              tutor_id: data.tutorId,
              start_date: combineDateTimeTZ({
                date: curDate,
                time: curConfigs[j].start_time,
                timezone:timezone
              }),
              end_date: combineDateTimeTZ({
                date: curDate,
                time: curConfigs[j].end_time,
                timezone:timezone
              }),
              status: 'closed',
              slotCount: null,
              slot_config_id: curConfigs[j].id
            }

          retSlots.push(sl)
        }
      }
    }

    return retSlots
  }

  const getDateRangeForSlot = async data => {
    let start_date = await getStartDateForSlot(data)
    let end_date = await getEndDateForSlot(data)
    return {
      start_date: start_date,
      end_date: end_date
    }
  }

  const getStartDateForSlot = ({ startDate }) =>
    compose(
      date.format,
      date.addDays
    )(startDate, MINIMUM_DAYS_TUTOR_OPEN_SLOT)

  const getEndDateForSlot = async data => {
    const { startDate } = data
    const slotDays = await getNumberOfDaysForSlot(data)
    const maxDate = await maxDateForSlot(data)
    const endDate = compose(
      date.format,
      date.addDays
    )(startDate, slotDays)
    return maxDate
      ? date.differenceInDays(endDate, maxDate) < 0
        ? endDate
        : date.format(maxDate)
      : endDate
  }

  const maxDateForSlot = async data => {
    const maxSlotDate = await slotRepository.getMaxSlotDate(data)
    return maxSlotDate
  }

  const getNumberOfDaysForSlot = async data => {
    const flgExist = await slotRepository.checkSlotExist(data)
    if (flgExist) return EXISTING_TUTOR_SCHEDULE_DAYS
    return NEW_TUTOR_SCHEDULE_DAYS
  }

  const getTrialSlots = async ({
    isAdmin,
    courseId,
    startDate: currentDate
  }) => {
    let startDate = new Date()
    startDate.setMinutes(startDate.getMinutes() + MINUTES_GAP)
    startDate =
      format(utc(startDate)) + ' ' + timeFormatforDate(startDate) + ':00'
    const endDate = format(
      addDays(currentDate, MAXIMUM_DAYS_OPEN_TRIAL_SLOT + 1)
    )
    const data = {
      startDate: startDate,
      endDate: endDate,
      courseId: courseId
    }
    const slots = await slotRepository.getTrialSlots(data)

    return slots ? slots.getData() : slots
  }

  const getSlotById = async id => slotRepository.getSlotById(id)

  const isTrialScheduled = async studentId => {
    const isBookingCreated = await bookingRepository.isTrialBookingCreated(
      studentId
    )
    return {
      isTrialScheduled: isBookingCreated
    }
  }

  const getOpenSlotToBookTrial = async data =>
    slotRepository.getOpenSlotToBookTrial(data)

  const getTutorsBasedOnAvailability = async ({
    courseId,
    limit = 5,
    startDate
  }) => {
    let endDate = format(addDays(startDate, PAID_SCHEDULE_DAYS + 1))
    return slotRepository.getTutorsSlotCount({
      courseId,
      limit: limit * 1,
      startDate,
      endDate
    })
  }

  return {
    getSlotConfigs,
    getSlotForTutor,
    getAllSlotsForDateRange,
    getDateRangeForSlot,
    getEndDateForSlot,
    getTrialSlots,
    isTrialScheduled,
    getSlotById,
    getTutorsBasedOnAvailability,
    getOpenSlotToBookTrial,
    getPaidSlotForTutor,
    getStudentBookedSlots
  }
})
