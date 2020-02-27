import { define } from '../../containerHelper'
/**
 * function for getter user.
 */
module.exports = define('deleteUserService', ({ userRepository }) => {
  // code for getting all the items
  const remove = async ({ id }) => {
    return userRepository.update(
      {
        is_active: 0
      },
      {
        where: { id }
      }
    )
  }

  return {
    remove
  }
})
