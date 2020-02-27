import { define } from '../../containerHelper'

module.exports = define('userFacade', ({
  postUserService,
  postVerificationService,
  getCourseService,
  postCourseService,
  postCommunicationService,
  emailService,
  getUserService,
  slackInfra,
  getVerificationService,
  putUserService,
  CustomError,
  constants: {
    TUTOR_ROLE,
    INVALID_REQUEST,
    INCORRECT_OTP,
    OTP_NOT_SENT,
    COMMUNICATION_ERROR
  },
  transactionDecorator: { transaction }
}) => {
  const verifyParentMobile = async args => {
    let user = await getUserService.getByMobile(args)

    if (!user)
      throw new CustomError(
        INVALID_REQUEST.code,
        INVALID_REQUEST.status,
        'Invalid request data. Please review request and try again.'
      )

    if (user.otp != args.otp)
      throw new CustomError(
        INCORRECT_OTP.code,
        INCORRECT_OTP.status,
        'OTP does not match. Please provide correct OTP and try again.'
      )

    const update = await putUserService.update(user.id, {
      is_active: true,
      mobile_verified: true
    })

    if (!update || !update.is_active)
      throw new CustomError(
        COMMUNICATION_ERROR.code,
        COMMUNICATION_ERROR.status,
        'Something went wrong during communication. Please try again.'
      )

    return user
  }

  const registerStudentMobile = async (mobile, isAdmin) => {
    let otp = process.env.OTP
    if (!isAdmin) otp = await postCommunicationService.sendOTP(mobile)

    if (!otp)
      throw new CustomError(
        OTP_NOT_SENT.code,
        OTP_NOT_SENT.status,
        'Error in sending OTP. Please try again.'
      )

    let user = await getUserService.getByMobile({ mobile: mobile })
    if (user) {
      user = await putUserService.update(user.id, { otp: otp })
    } else {
      user = await postUserService.create({
        body: {
          mobile: mobile,
          otp: otp,
          loginType: 'mobile',
          socialId: isAdmin ? 'admin' : null
        }
      })
    }

    return user
  }

  const updateStudentProfile = async (id, userProfile) => {
    await putUserService.update(id, userProfile)
    const user = await getUserService.getUserById(id)
    const courseData = await getCourseService.getCourseByLevelId(
      userProfile.course_level_id
    )
    await postCourseService.mapUserCourse(user, courseData)
    await slackInfra.send(
      `User: ${user.id} completed signup. 
      Details: 
      Grade: ${user.grade}, 
      Name: ${user.name}, 
      Parent Name: ${user.parent_name}, 
      email: ${user.email}, 
      mobile: ${user.mobile}`,
      '#signupdone'
    )
    return user
  }

  return {
    registerStudentMobile: transaction(registerStudentMobile),
    verifyParentMobile: transaction(verifyParentMobile),
    updateStudentProfile: transaction(updateStudentProfile)
  }
})
