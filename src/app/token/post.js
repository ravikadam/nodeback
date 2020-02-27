import { define } from '../../containerHelper'
import httpContext from 'express-cls-hooked'
module.exports = define('postTokenService', ({
  userRepository,
  jwt,
  tokenDomain,
  CustomError,
  constants,
  courseRepository
}) => {
  const {
    INVALID_USER_PASSSWORD,
    EMAIL_NOT_VERIFIED,
    UNAUTHORIZED_REQUEST
  } = constants
  const webToken = jwt

  const validate = async ({ body }) => {
    const credentials = tokenDomain(body)
    const userCredentials = await userRepository.findOne({
      attributes: [
        'id',
        'name',
        'email',
        'password',
        'role',
        'mobile',
        'is_active',
        'timezone'
      ],
      where: {
        mobile: credentials.mobile,
        login_type: 'mobile'
      }
    })

    if (!userCredentials) {
      throw new CustomError(
        INVALID_USER_PASSSWORD.code,
        INVALID_USER_PASSSWORD.status
      )
    }

    if (userCredentials && userCredentials.is_active === 0) {
      throw new CustomError(EMAIL_NOT_VERIFIED.code, EMAIL_NOT_VERIFIED.status)
    }

    const validatePass = userRepository.validatePassword(
      userCredentials.password
    )
    if (!validatePass(credentials.password)) {
      throw new CustomError(
        INVALID_USER_PASSSWORD.code,
        INVALID_USER_PASSSWORD.status
      )
    }

    return generateTokenFromUser(userCredentials)
  }

  const generateTokenFromUser = async userCredentials => {
    const signIn = webToken.signin()
    var courseData = null
    switch (userCredentials.role) {
      case constants.STUDENT_ROLE:
        courseData = await courseRepository.getCourseByStudentId(
          userCredentials.id
        )
        break
      case constants.TUTOR_ROLE:
        courseData = await courseRepository.getCourseByTutorId(
          userCredentials.id
        )
        break
      default:
        break
    }

    const retObj = {
      id: userCredentials.id,
      name: userCredentials.name,
      role: userCredentials.role,
      email: userCredentials.email,
      timezone: userCredentials.timezone,
      course: courseData
        ? {
            ...courseData.getData()
          }
        : {}
    }

    //do not remove this log
    console.log('USER', retObj)
    httpContext.set('currentuser', retObj)
    return {
      token: signIn(retObj)
    }
  }

  const getTokenByUser = async user => {
    return await generateTokenFromUser({
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      password: user.password,
      role: user.role,
      social_id: user.social_id,
      is_active: user.is_active,
      timezone: user.timezone
    })
  }

  return {
    validate,
    getTokenByUser
  }
})
