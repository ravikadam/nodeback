import moment from 'moment'
import { compose } from 'ramda'

const DayofWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thrusday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

export default ({ config, sessionHook }) => {
  const currentDate = ({ timezone }) => () => moment().tz(timezone)

  const timeZoneDate = ({ timezone }) => date => {
    return moment
      .tz(date, 'utc')
      .tz(timezone)
      .format()
  }

  const timeZoneStartDate = ({ timezone }) => date =>
    moment.tz(date, timezone).format()

  const utc = date =>
    moment(date)
      .utc()
      .format()

  const addHour = duration =>
    moment()
      .add(duration, 'hour')
      .toISOString()

  const addDays = (date, days) => moment(date).add(days, 'days')

  const addMinutes = (date, mins) => moment(date).add(mins, 'minutes')

  const getHour = date => moment(date).hour()
  const getDayOfWeek = date => moment(date).isoWeekday()
  const setTime = (date, hour, minute) =>
    moment(date).set({ h: hour, m: minute })

  const differenceInDays = (startDate, endDate) =>
    moment(endDate).diff(startDate, 'days')

  const eachDay = (startDate, endDate) => {
    const days = differenceInDays(startDate, endDate)
    return new Array(days).map((val, ind) => {
      return addDays(startDate, ind).format()
    })
  }

  const filterDatesByDOW = (startDate, endDate, dow) => {
    const ndow = DayofWeek[dow]
    return eachDay(startDate, endDate).filter((date, ind) => {
      return getDayOfWeek(date) === ndow
    })
  }

  const dayToISODay = (date, day) =>
    moment(date)
      .isoWeekday(day)
      .isoWeekday()

  const queryFormat = date =>
    moment(date).format('YYYY-MM-DD') + ' ' + moment(date).format('HH:mm:ss')

  const format = date => moment(date).format('YYYY-MM-DD')
  const userFormat = date => {
    const longformat = moment(date).format('LLLL')
    if (longformat && longformat.indexOf(' ') > 0) {
      let lfa = longformat.split(' ')
      if (lfa && lfa.length > 3)
        return lfa[0] + ' ' + lfa[1] + ' ' + lfa[2] + ' ' + lfa[3]
    }

    return longformat
  }

  const userFormatZone = ({ timezone }) => date => {
    const longformat = moment(date)
      .tz(timezone)
      .format('LLLL')
    if (longformat && longformat.indexOf(' ') > 0) {
      let lfa = longformat.split(' ')
      if (lfa && lfa.length > 3)
        return lfa[0] + ' ' + lfa[1] + ' ' + lfa[2] + ' ' + lfa[3]
    }

    return longformat
  }

  const timeFormatforDate = date => moment(date).format('HH:mm')

  const getTodaysDate = () => {
    const dateTime = moment()
    const dateValue = moment({
      year: dateTime.year(),
      month: dateTime.month(),
      day: dateTime.date()
    })
    return dateValue
  }
  const timeFormat = (date, format = 'hh:mm A') => moment(date).format(format)
  const timeFormatZone = ({ timezone }) => (date, format = 'hh:mm A') =>
    moment(date)
      .tz(timezone)
      .format(format)
  const combineDateTime = (date, time) => moment(date + ' ' + time)

  const combineDateTimeTZ =  ({ date, time,timezone }) =>
    moment.tz(date + ' ' + time, timezone).format()

  const substractHour = (date, hour) => moment(date).subtract(hour, 'hour')
  const substractMinute = (date, minute) =>
    moment(date).subtract(minute, 'minute')

  /**
   * Get Start date of week for the date i.e. Monday
   * @param {Date} date
   */
  const startOfWeek = date => moment(date).startOf('isoWeek')

  /**
   * Get End date of week for the date i.e. Sunday
   * @param {Date} date
   */
  const endOfWeek = date => moment(date).endOf('isoWeek')

  /**
   * Gets Start and End date of the week
   * @param {Any Date of the week} date
   */
  const weeklyDateRange = date => {
    return {
      startDate: compose(
        format,
        startOfWeek
      )(date),
      endDate: compose(
        format,
        endOfWeek
      )(date)
    }
  }
  return {
    addHour,
    differenceInDays,
    eachDay,
    filterDatesByDOW,
    dayToISODay,
    format,
    addDays,
    getDayOfWeek,
    getTodaysDate,
    timeFormat,
    userFormat,
    addMinutes,
    queryFormat,
    timeFormatZone: sessionHook(timeFormatZone),
    userFormatZone: sessionHook(userFormatZone),
    timeFormatforDate,
    timeZoneStartDate: sessionHook(timeZoneStartDate),
    combineDateTime,
    combineDateTimeTZ: combineDateTimeTZ,
    substractHour,
    substractMinute,
    getHour,
    setTime,
    currentDate: sessionHook(currentDate),
    weeklyDateRange,
    timeZoneDate: sessionHook(timeZoneDate),
    utc
  }
}
