import { define } from '../../containerHelper'

module.exports = define('postSlotService', ({
  slotRepository,
  slotConfigsDomain,
  slotsDomain,
  config: { appConfig },
  date,
  CustomError,
  bookingRepository,
  constants
}) => {
  const {
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_OPEN_SLOT,
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_EDIT_SLOT
  } = appConfig
  const {
    // eslint-disable-next-line no-unused-vars
    SLOT_OPEN_MINIMUM_DAYS,
    // eslint-disable-next-line no-unused-vars
    SLOT_CLOSE_MINIMUM_DAYS,
    SLOT_NOT_EDITABLE,
    SLOT_CLOSED,
    SLOT_OPEN,
    SLOT_BOOKED,
    SLOT_ALREADY_BOOKED
  } = constants

  const { timeFormatforDate, format, addDays } = date

  const createOrUpdateSlots = async (slotsData, data) => {
    if (!slotsData) {
      return
    }
    const slots = slotsDomain(slotsData)
    await validateNonEditableSlots(slotsData, data)
    // validateSlotsCanOpen(slotsData, data)
    // validateSlotsCanClosed(slotsData, data)

    slots.toggleStatus()
    const finSlots = slots.convertToUTC().map(slot => {
      return {
        ...slot,
        created_by: data.tutorId,
        updated_by: data.tutorId
      }
    })
    const updatedData = await slotRepository.upsertSlots(finSlots)
    if (updatedData) return updatedData.getData()
    else return updatedData
  }

  const closeImpactedSlots = async data =>
    slotRepository.closeImpactedSlots(data)

  const validateNonEditableSlots = async (slotsData, data) => {
    const slots = slotsDomain(slotsData)
    const ids = slots.getAllIds()
    const nonEditableSlots = await slotRepository.getNonEditableSlots(data, ids)
    if (nonEditableSlots.length() > 0) {
      throw new CustomError(
        SLOT_NOT_EDITABLE.code,
        SLOT_NOT_EDITABLE.status,
        nonEditableSlots.getData()
      )
    }
  }

  const copyFromPreviousWeek = async (slotsData, data) => {
    const slots = slotsDomain(slotsData)
    const previousDayTimeMap = await getDayTimeMapByDates(data)
    const syncSlots = await syncSlotWithServer(slots, data)
    const finSlots = syncSlots.map(slot => {
      if (slot.isSlotEditable(data.currentDate)) {
        return overWriteSlotFromPreviousWeek(previousDayTimeMap, slot, data)
      } else {
        return slot.getData()
      }
    })
    const updatedData = await slotRepository.upsertSlots(finSlots)
    return updatedData.getData()
  }

  const overWriteSlotFromPreviousWeek = (previousDayTimeMap, slot, data) => {
    const slotDOW = date.getDayOfWeek(slot.getStartDate())
    const slotStartTime = timeFormatforDate(slot.getStartDate())
    const previousSlot =
      previousDayTimeMap[slotDOW] && previousDayTimeMap[slotDOW][slotStartTime]
        ? previousDayTimeMap[slotDOW][slotStartTime]
        : null
    const status = previousSlot ? previousSlot.getStatus() : null
    return {
      ...slot.getData(),
      status: status
        ? status === SLOT_CLOSED
          ? SLOT_CLOSED
          : SLOT_OPEN
        : slot.getStatus(),
      created_by: data.tutorId,
      updated_by: data.tutorId
    }
  }

  const getDayTimeMapByDates = async data => {
    const previousSlotsData = await slotRepository.getSlotsForTutor({
      tutorId: data.tutorId,
      courseId: data.courseId,
      startDate: data.previousStartDate,
      endDate: format(addDays(data.previousEndDate, 1))
    })
    const previousDayTimeMap = previousSlotsData.createDayTimeMap()
    return previousDayTimeMap
  }

  const syncSlotWithServer = async (slots, data) => {
    const ids = slots.getAllIds()
    const dbSlots = await slotRepository.getSlotsByIds(data, ids)
    return slots.mergeStatus(dbSlots)
  }

  const reserveTrialSlot = async data => slotRepository.reserveTrialSlot(data)

  const bookTrialSlot = async data => slotRepository.bookTrialSlot(data)

  const bookSlot = async ({ slotId, userId }) => {
    const slotUpdateStatus = await slotRepository.update(
      { status: SLOT_BOOKED, updated_by: userId },
      {
        where: {
          id: slotId,
          status: {
            $notIn: [SLOT_CLOSED, SLOT_BOOKED]
          }
        }
      }
    )
    const isSlotBooked = parseInt(slotUpdateStatus) === 1
    if (!isSlotBooked) {
      throw new CustomError(
        SLOT_ALREADY_BOOKED.code,
        SLOT_ALREADY_BOOKED.status
      )
    }
  }

  const openSlot = async ({ slotId, userId }) =>
    _updateSlot({ slotId, userId, status: SLOT_OPEN })

  const _updateSlot = async ({ slotId, status, userId }) =>
    slotRepository.update(
      {
        status: status,
        updated_by: userId
      },
      {
        where: {
          id: slotId
        }
      }
    )

  return {
    createOrUpdateSlots,
    copyFromPreviousWeek,
    bookTrialSlot,
    reserveTrialSlot,
    closeImpactedSlots,
    openSlot,
    bookSlot
  }
})
