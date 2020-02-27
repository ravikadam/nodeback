import { struct, maybe, String } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'
import { CourseLevel } from './courseLevel'
import { Course as StudentCourse } from './studentCourse'

const Course = struct({
  id: maybe(String),
  name: String,
  course_level_id: maybe(String),
  course_levels: maybe(CourseLevel),
  student_courses: maybe(StudentCourse)
})

Course.prototype.getId = function() {
  return this.id
}

Course.prototype.getName = function() {
  return this.name
}

Course.prototype.getCourseLevelId = function() {
  return this.course_level_id
}

Course.prototype.getCourseLevelName = function() {
  return this.course_level_name
}

Course.prototype.getData = function() {
  return {
    id: this.id,
    name: this.name,
    ...(this.course_levels ? this.course_levels.getData() : {}),
    ...(this.student_courses ? this.student_courses.getData() : {})
  }
}

module.exports = define('courseDomain', () => {
  return compose(
    cleanData,
    Course
  )
})
