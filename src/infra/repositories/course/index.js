import { define } from '../../../containerHelper'

module.exports = define('courseRepository', ({
  database,
  courseDomain,
  studentCourseDomain,
  tutorCourseDomain
}) => {
  const model = database['course']
  const courseLevelMasterModel = database['course_level']
  const studentCourseModel = database['student_course']
  const tutorCourseModel = database['tutor_course']
  const toEntity = courseDomain

  const findCourseByLevelId = (levelId, args) =>
    model
      .findAll({
        ...args,
        include: [
          {
            model: courseLevelMasterModel,
            as: 'course_levels',
            required: true,
            attributes: [],
            where: { id: levelId }
          }
        ]
      })
      .then(entity =>
        entity.map(data => {
          const { dataValues } = data
          return toEntity(dataValues)
        })
      )

  const createStudentCourse = (...args) =>
    studentCourseModel
      .findOrCreate({
        where: {
          student_id: args[0].student_id
        },
        defaults: args[0]
      })
      .then(data => {
        return studentCourseDomain(data[0].dataValues)
      })

  const updateStudentCourseStatus = ({
    courseId,
    studentId,
    status,
    fromStatus
  }) =>
    studentCourseModel
      .update(
        {
          status: status
        },
        {
          where: {
            student_id: studentId,
            course_id: courseId,
            status: fromStatus
          },
          limit: 1
        }
      )
      .then(data => {
        return data
      })

  const createTutorCourse = (...args) =>
    tutorCourseModel
      .create(...args)
      .then(({ dataValues }) => tutorCourseDomain(dataValues))

  const getStudentCourse = (...args) => {
    return studentCourseModel.findOne(...args).then(data => {
      if (!data) return null
      const { dataValues } = data
      return studentCourseDomain(dataValues)
    })
  }

  const getCourseByStudentId = studentId => {
    return model
      .findOne({
        required: true,
        nest: true,
        attributes: ['id', 'name', 'course_level_id'],
        raw: true,
        include: [
          {
            model: studentCourseModel,
            required: true,
            attributes: ['status'],
            where: {
              student_id: studentId
            }
          },
          {
            model: courseLevelMasterModel,
            as: 'course_levels',
            required: true,
            attributes: ['name', 'id']
          }
        ]
      })
      .then(data => {
        if (!data) return null
        return courseDomain(data)
      })
  }

  const getCourseByTutorId = tutorId => {
    return model
      .findOne({
        required: true,
        nest: true,
        attributes: ['id', 'name', 'course_level_id'],
        raw: true,
        include: [
          {
            model: tutorCourseModel,
            required: true,
            attributes: [],
            where: {
              tutor_id: tutorId
            }
          },
          {
            model: courseLevelMasterModel,
            as: 'course_levels',
            required: true,
            attributes: ['name', 'id']
          }
        ]
      })
      .then(data => {
        if (!data) return null
        return courseDomain(data)
      })
  }

  return {
    createStudentCourse,
    getStudentCourse,
    findCourseByLevelId,
    updateStudentCourseStatus,
    createTutorCourse,
    getCourseByTutorId,
    getCourseByStudentId
  }
})
