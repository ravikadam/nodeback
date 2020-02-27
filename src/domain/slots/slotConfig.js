import { struct, maybe, String, Date, Boolean } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

export const SlotConfig = struct({
  id: maybe(String),
  day: maybe(String),
  start_date: maybe(Date),
  end_date: maybe(Date),
  start_time: maybe(String),
  end_time: maybe(String),
  is_active: maybe(Boolean),
  type: maybe(String),
  order: maybe(String),
  slot_config_type: maybe(String)
})

SlotConfig.prototype.getData = function () {
  return {
    id: this.id,
    day: this.day,
    order: this.order,
    start_date: this.start_date,
    end_date: this.end_date,
    start_time: this.start_time,
    end_time: this.end_time,
    slot_config_type: this.slot_config_type,
    slot_type: this.slot_type,
    is_active: this.is_active
  }
}

SlotConfig.prototype.getId = function () {
  return this.id
}

SlotConfig.prototype.getOrder = function () {
  return this.order
}

SlotConfig.prototype.getStartDate = function () {
  return this.start_date
}

SlotConfig.prototype.getDay = function () {
  return this.day
}

SlotConfig.prototype.getStartTime = function () {
  return this.start_time
}

SlotConfig.prototype.getEndTime = function () {
  return this.end_time
}

export default define('slotConfigDomain', () => {
  return compose(
    cleanData,
    SlotConfig
  )
})
