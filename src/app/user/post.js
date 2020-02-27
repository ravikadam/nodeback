import { define } from '../../containerHelper'
/**
 * function for getter user.
 */
module.exports = define('postUserService', ({
  userRepository,
  userDomain,
  constants
}) => {
  // code for getting all the items
  const create = async ({ body }) => {
    const password = body.password || 'test'
    const role = body.role || constants.STUDENT_ROLE
    const otp = body.otp
    const zip = body.zip
    const city = body.city
    const name = body.name
    const email = body.email
    const image = body.image
    const state = body.state
    const gender = body.gender
    const locale = body.locale
    const mobile = body.mobile
    const address = body.address
    const country = body.country
    const timezone = body.timezone
    const grade = body.grade
    const courseLevelId = body.courseLevelId
    const socialId = body.socialId
    const loginType = body.loginType
    const familyName = body.familyName
    const parentName = body.parentName
    const parentImage = body.parentImage
    const emailVerified = body.emailVerified
    const mobileVerified = body.mobileVerified
    const isActive = !!body.isActive

    const entity = Object.assign(
      {},
      {
        otp,
        zip,
        city,
        name,
        role,
        email,
        image,
        state,
        gender,
        locale,
        mobile,
        address,
        country,
        password,
        timezone,
        grade: grade,
        course_level_id: courseLevelId,
        social_id: socialId,
        is_active: isActive,
        login_type: loginType,
        created_at: Date.now(),
        updated_at: Date.now(),
        family_name: familyName,
        parent_name: parentName,
        parent_image: parentImage,
        email_verified: emailVerified,
        mobile_verified: mobileVerified
      }
    )
    const user = await userRepository.create(entity)
    
    return user.getData()
  }

  return {
    create
  }
})
