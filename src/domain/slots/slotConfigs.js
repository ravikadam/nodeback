import { struct, list, maybe } from 'tcomb'
import { SlotConfig } from './slotConfig'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

import uidv4 from 'uuid/v4'

module.exports = define('slotConfigsDomain', ({ date }) => {
  const {
    getDayOfWeek,
    dayToISODay,
    differenceInDays,
    addDays,
    format,
    combineDateTimeTZ
  } = date
  const SlotConfigs = struct({
    slots: maybe(list(SlotConfig))
  })

  SlotConfigs.prototype.getData = function() {
    return { slots: this.slots.map(slot => slot.getData()) }
  }

  const filterByDate = (date, slotConfigs) => {
    const day = getDayOfWeek(date)
    return slotConfigs.filter(slot => {
      const slotDay = dayToISODay(date, slot.getDay())
      return slotDay === day
    })
  }

  return compose(
    cleanData,
    SlotConfigs
  )
})
