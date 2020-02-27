import { define } from '../../containerHelper'

/**
 * function for getter user.
 */
module.exports = define('putUserService', ({
  userRepository,
  userDomain,
  md5
}) => {
  // code for getting all the items
  const update = async (id, user) => {
    await userRepository.update(user, {
      where: { id }
    })

    return user
  }

  const updateIsActive = async userData => {
    const user = userDomain(userData)
    // user = user.setActive(user)
    return update(user.getId(), { is_active: true })
  }

  
  return {
    updateIsActive,
    update
  }
})
