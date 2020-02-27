/* eslint-disable no-unexpected-multiline */

import { struct, list, maybe } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'
import { transform, map } from 'lodash/fp'
import fromJSON from 'tcomb/lib/fromJSON'

module.exports = define('slotsDomain', ({
  config: { appConfig },
  constants,
  date,
  slotDomain
}) => {
  const { SLOT_CLOSED, SLOT_OPEN } = constants
  const { getDayOfWeek, timeFormatforDate } = date
  const slots = struct({
    slots: maybe(list(slotDomain))
  })
  const {
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_OPEN_SLOT,
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_TUTOR_EDIT_SLOT
  } = appConfig

  slots.prototype.length = function() {
    return this.slots.length
  }

  slots.prototype.getData = function() {
    return { slots: this.slots.map(slot => slot.getData()) }
  }

  slots.prototype.getOpenSlots = function() {
    return this.slots.filter(slot => slot.status === constants.SLOT_OPEN)
  }

  slots.prototype.getClosedSlots = function() {
    return this.slots.filter(slot => slot.status === constants.SLOT_CLOSED)
  }

  slots.prototype.getAllIds = function() {
    return this.slots.map(slot => slot.id)
  }

  slots.prototype.updateSlots = function(instance, newSlots) {
    return slots.update(instance, {
      slots: {
        $set: newSlots
      }
    })
  }

  slots.prototype.toggleStatus = function() {
    this.slots = this.slots.map(slot => {
      if (slot.getStatus() === SLOT_OPEN || slot.getStatus() === SLOT_CLOSED) {
        slot = slot.updateStatus(
          slot.getStatus() === SLOT_OPEN ? SLOT_CLOSED : SLOT_OPEN,
          slot
        )
      }
      return slot
    })
  }

  slots.prototype.convertToTimeZone = function() {
    return this.slots.map(slot => slot.convertToTimeZone())
  }

  slots.prototype.convertToUTC = function() {
    return this.slots.map(slot => slot.convertToUTC())
  }

  slots.prototype.createDayTimeMap = function() {
    return this.slots.reduce((res, slot) => {
      const dayOfWeek = getDayOfWeek(slot.getStartDate())
      const dateMap = res[dayOfWeek] || (res[dayOfWeek] = {})
      dateMap[timeFormatforDate(slot.getStartDate())] = slot
      return res
    }, {})
  }

  slots.prototype.getIdSlotMap = function() {
    return this.slots.reduce((res, slot) => {
      res[slot.getId()] = slot
      return res
    }, {})
  }

  slots.prototype.mergeStatus = function(mergeSlot) {
    const mergeIdSlotMap = mergeSlot.getIdSlotMap()
    return this.slots.map(slot => {
      const mergeSlot = mergeIdSlotMap[slot.getId()]
      if (mergeSlot) {
        slot = slot.updateStatus(mergeSlot.getStatus(), slot)
      }
      return slot
    })
  }

  const compareInSlotMap = slotsMap => slot => {
    const startDate = slot.start_date
    if (slotsMap && slotsMap[startDate]) {
      return slotsMap[startDate]
    }
    return null
  }

  const createSlotMap = slots => {
    return mapByDateAndTime(slots)
  }

  const mapByDateAndTime = transform((result, slot) => {
    const startDate = slot.getStartDate()
    let dateResult = result[startDate]
    if (!dateResult) {
      result[startDate] = slot
    }
  }, {})

  const createObject = json => {
    return fromJSON(json, slots)
  }
  return compose(
    cleanData,
    createObject
  )
})
