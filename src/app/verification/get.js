import { define } from '../../containerHelper'

/**
  * function for getter user.
  */
module.exports = define('getVerificationService', ({ verificationRepository }) => {
  // code for getting all the items
  const byToken = async (token) => {
    const Verification = await verificationRepository.getByToken({
      where: {
        token
      }
    }, {
      attributes: [
        'id', 'user_id', 'token', 'created_at'
      ]
    })
    if (Verification && Verification.length > 0) {
      return Verification[0]
    }
    return null
  }

  return {
    byToken
  }
})
