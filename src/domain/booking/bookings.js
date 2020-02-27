import { struct, list, maybe } from 'tcomb'
import { compose } from 'ramda'
import { define } from '../../containerHelper'
import { cleanData } from '../helper'

module.exports = define('bookingsDomain', ({ bookingDomain }) => {
  const bookings = struct({
    bookings: maybe(list(bookingDomain))
  })

  bookings.prototype.getData = function() {
    return { bookings: this.bookings.map(booking => booking.getData()) }
  }

  return compose(
    cleanData,
    bookings
  )
})
