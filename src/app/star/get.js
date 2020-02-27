import { define } from '../../containerHelper'

/**
 * function for getter bookings.
 */
module.exports = define('getUserStarService', ({ userStarRepository }) => {
  const getTotalStarForUser = async ({ userId }) => {
    return userStarRepository.getTotalStarForUser({ userId })
  }

  return {
    getTotalStarForUser
  }
})
