import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('bookingFacade', ({
  postBookingService,
  getBookingService,
  postSessionService,
  postSlotService,
  constants,
  transactionDecorator: { transaction }
}) => {
  const cancelBooking = async args => {
    const cancelBooking = postBookingService.cancelBooking(args)
    const openSession = postSessionService.openSession(args)
    const openSlot = postSlotService.openSlot(args)

    const result = [await cancelBooking, await openSession, await openSlot]
    await postSessionService.reshuffleSessions(args)
    return getBookingService.getBookingById(args)
  }

  const createBooking = async args => {
    const bookSlot = postSlotService.bookSlot(args)
    const sessionEntity = await postSessionService.bookSession(args)
    const createBooking = postBookingService.createNewBooking({
      ...args,
      sessionId: sessionEntity.id
    })
    const result = [await bookSlot, await createBooking]
    const bookingId = result[1].id
    await postSessionService.reshuffleSessions(args)
    return getBookingService.getBookingById({ bookingId })
  }

  return {
    cancelBooking: transaction(cancelBooking),
    createBooking: transaction(createBooking)
  }
})
