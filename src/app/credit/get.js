import {
  define
} from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('getCreditService', ({
  creditRepository
}) => {
  const getCredits = async ({
    userId,
    isTrial
  }) => {
    return creditRepository.getTotalCredits({
      userId,
      isTrial
    })
  }

  return {
    getCredits
  }
})
