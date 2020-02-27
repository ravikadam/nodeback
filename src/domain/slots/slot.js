import { struct, maybe, String, Date as tDate } from 'tcomb'
import { define } from '../../containerHelper'

tDate.fromJSON = x => {
  return isNaN(Date.parse(x)) ? x : new Date(x)
}

export default define('slotDomain', ({
  date,
  constants,
  config: { appConfig }
}) => {
  const { SLOT_CLOSED, SLOT_OPEN } = constants
  const {
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_OPEN_SLOT,
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_EDIT_SLOT
  } = appConfig
  const { timeZoneDate, utc, format } = date

  const Slot = struct({
    id: maybe(String),
    tutor_id: maybe(String),
    slot_config_id: maybe(String),
    start_date: maybe(tDate),
    end_date: maybe(tDate),
    status: maybe(String),
    slot_count: maybe(Number),
    created_by: maybe(String),
    updated_by: maybe(String)
  })

  Slot.prototype.getData = function() {
    return {
      id: this.id,
      tutor_id: this.tutor_id,
      start_date: this.getStartDate(),
      end_date: this.getEndDate(),
      status: this.status,
      slotCount: this.slot_count,
      slot_config_id: this.slot_config_id
    }
  }

  Slot.prototype.getId = function() {
    return this.id
  }

  Slot.prototype.getSlotCount = function() {
    return this.slot_count
  }

  Slot.prototype.getStartDate = function() {
    return timeZoneDate(this.start_date)
  }

  Slot.prototype.getEndDate = function() {
    return timeZoneDate(this.end_date)
  }

  Slot.prototype.isSlotEditable = function(currentDate) {
    return (
      (this.status === SLOT_CLOSED || this.status === SLOT_OPEN) &&
      this.canSlotOpen(currentDate) &&
      this.canSlotClosed(currentDate)
    )
  }

  Slot.prototype.canSlotOpen = function(currentDate) {
    return !(
      this.getStatus() === constants.SLOT_CLOSED &&
      date.differenceInDays(format(currentDate), format(this.getStartDate())) <
        MINIMUM_DAYS_TUTOR_OPEN_SLOT
    )
  }

  Slot.prototype.canSlotClosed = function(currentDate) {
    return !(
      this.getStatus() === constants.SLOT_OPEN &&
      date.differenceInDays(format(currentDate), format(this.getStartDate())) <
        MINIMUM_DAYS_TUTOR_EDIT_SLOT
    )
  }

  Slot.prototype.updateStatus = function(status, instance) {
    const s = Slot.update(instance, {
      status: {
        $set: status
      }
    })
    return s
  }

  Slot.prototype.convertToTimeZone = function() {
    return {
      id: this.id,
      tutor_id: this.tutor_id,
      start_date: timeZoneDate(this.start_date),
      end_date: timeZoneDate(this.end_date),
      status: this.status,
      slot_config_id: this.slot_config_id
    }
  }

  Slot.prototype.convertToUTC = function() {
    return {
      id: this.id,
      tutor_id: this.tutor_id,
      start_date: utc(this.start_date),
      end_date: utc(this.end_date),
      status: this.status,
      slot_config_id: this.slot_config_id
    }
  }

  Slot.prototype.getStatus = function() {
    return this.status
  }

  return Slot
})
