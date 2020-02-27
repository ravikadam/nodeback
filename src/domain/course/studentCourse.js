import { struct, maybe, String } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

export const Course = struct({
  id: maybe(String),
  student_id: maybe(String),
  course_id: maybe(String),
  status: maybe(String),
  created_by: maybe(String),
  updated_by: maybe(String)
})

Course.prototype.getData = function() {
  return {
    studentCourseId: this.id,
    studentId: this.student_id,
    courseId: this.course_id,
    status: this.status,
    createdBy: this.created_by,
    updatedBy: this.updated_by
  }
}

export default define('studentCourseDomain', () => {
  return compose(
    cleanData,
    Course
  )
})
