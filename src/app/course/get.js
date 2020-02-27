import { define } from '../../containerHelper'

/**
 * function for getter user.
 */
module.exports = define('getCourseService', ({
  courseDomain,
  courseRepository,
  constants
}) => {
  const getCourseByLevelId = async levelId => {
    const courses = await courseRepository.findCourseByLevelId(levelId, {
      attributes: ['id', 'name']
    })

    if (courses && courses.length > 0) return courses[0]
  }

  const getCourseByStudentId = studentId => {
    return courseRepository.getCourseByStudentId(studentId)
  }

  return {
    getCourseByLevelId,
    getCourseByStudentId
  }
})
