import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('postCreditService', ({ creditRepository }) => {
  const addCredit = async ({
    userId,
    isTrial,
    bookingId,
    slotId,
    sessionId,
    auditUser
  }) => {
    return creditRepository.assignCredit({
      user_id: userId,
      is_trial: isTrial,
      is_credit: true,
      booking_id: bookingId,
      slot_id: slotId,
      session_id: sessionId,
      credit: 1,
      created_by: auditUser,
      updated_by: auditUser
    })
  }
  const deductCredit = async ({
    userId,
    isTrial,
    bookingId,
    slotId,
    sessionId,
    credit
  }) => {
    return creditRepository.assignCredit({
      user_id: userId,
      is_trial: isTrial,
      is_credit: false,
      booking_id: bookingId,
      slot_id: slotId,
      session_id: sessionId,
      credit: 1,
      created_by: userId,
      updated_by: userId
    })
  }

  return {
    addCredit,
    deductCredit
  }
})
