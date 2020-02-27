import { define } from '../../containerHelper'

/**
  * function for getter user.
  */
module.exports = define('postVerificationService', ({ verificationRepository, md5, verificationDomain }) => {
  // code for getting all the items
  const create = async (userId) => {
    const token = md5()
    const entity = Object.assign({}, {
      user_id: userId,
      token,
      created_by: userId,
      updated_by: userId
    })
    const record = verificationDomain(entity)
    return verificationRepository.create(record)
  }

  return {
    create
  }
})
