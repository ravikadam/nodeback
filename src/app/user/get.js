import { define } from '../../containerHelper'

module.exports = define('getUserService', ({
  userRepository,
  userDomain,
  verificationDomain,
  courseRepository,
  constants,
  CustomError
}) => {
  const all = async () => {
    return userRepository.getAll({
      attributes: ['id', 'name', 'email', 'role', 'is_active', 'mobile']
    })
  }

  const getBySocialId = async (id, type) => {
    return userRepository.findOne(
      {
        where: {
          social_id: id,
          login_type: type
        }
      },
      {
        attributes: [
          'id',
          'name',
          'email',
          'role',
          'is_active',
          'mobile',
          'grade',
          'social_id'
        ]
      }
    )
  }

  const getByMobile = async args => {
    if (!args.mobile)
      throw new CustomError(
        constants.INVALID_REQUEST.code,
        constants.INVALID_REQUEST.status
      )

    return userRepository.findOne({
      where: {
        mobile: args.mobile,
        login_type: 'mobile'
      }
    })
  }

  const getByEmailId = async email => {
    return userRepository.findOne(
      {
        where: {
          email: email,
          login_type: 'email'
        }
      },
      {
        attributes: ['id', 'name', 'email', 'role', 'is_active', 'mobile']
      }
    )
  }

  const getById = async id => {
    return userRepository.getAll(
      {
        where: {
          id
        }
      },
      {
        attributes: [
          'id',
          'name',
          'email',
          'role',
          'is_active',
          'mobile',
          'grade',
          'social_id',
          'parent_name',
          'room_url',
          'bio_url',
          'profile_description'
        ]
      }
    )
  }

  const getSecret = async id => userRepository.getSecret(id)

  const getBySecret = async secret => {
    return userRepository.findOne({
      where: {
        secret: secret
      }
    })
  }

  const getUserById = async id => {
    const users = await getById(id)
    if (users && users.length > 0) return users[0]
  }

  const checkUserActive = async userData => {
    const user = userDomain(userData)
    return user.getIsActive()
  }

  const getUserInfo = async user => {
    let courseData = null
    user = await getUserById(user.id)
    switch (user.role) {
      case constants.STUDENT_ROLE:
        courseData = await courseRepository.getCourseByStudentId(user.id)
        break
      case constants.TUTOR_ROLE:
        courseData = await courseRepository.getCourseByTutorId(user.id)
        break
      default:
        break
    }

    return {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      timezone: user.timezone,
      parentName: user.parent_name,
      socialId: user.social_id,
      mobile: user.mobile,
      grade: user.grade != '0' && user.grade != 0 ? user.grade : null,
      course: courseData
        ? {
            ...courseData.getData()
          }
        : {}
    }
  }

  return {
    all,
    getById,
    getByMobile,
    checkUserActive,
    getByEmailId,
    getBySocialId,
    getUserById,
    getSecret,
    getBySecret,
    getUserInfo
  }
})
