import { define } from '../../containerHelper'

/**
 * function for getter user.
 */
module.exports = define('postCourseService', ({
  courseDomain,
  userDomain,
  courseRepository,
  constants
}) => {
  const updateStudentCourseStatus = async data =>
    courseRepository.updateStudentCourseStatus(data)

  // code for getting all the items
  const mapUserCourse = async (userData, courseData) => {
    const user = userDomain(userData)
    const course = courseDomain(courseData)

    switch (user.getRole()) {
      case constants.STUDENT_ROLE:
        await courseRepository.createStudentCourse({
          student_id: user.getId(),
          course_id: course.getId(),
          status: constants.STUDENT_TRIAL_TO_BE_SCHEDULED_STATUS,
          created_by: user.getId(),
          updated_by: user.getId()
        })
        break
      case constants.TUTOR_ROLE:
        await courseRepository.createTutorCourse({
          tutor_id: user.getId(),
          course_id: course.getId(),
          status: constants.SLOTS_TO_BE_OPENED_STATUS,
          created_by: user.getId(),
          updated_by: user.getId()
        })
        break
      default:
        break
    }
  }

  return {
    mapUserCourse,
    updateStudentCourseStatus
  }
})
