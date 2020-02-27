import { struct, maybe, String } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

const Course = struct({
  id: maybe(String),
  tutor_id: String,
  course_id: String,
  status: maybe(String),
  created_by: maybe(String),
  updated_by: maybe(String)
})

module.exports = define('tutorCourseDomain', () => {
  return compose(
    cleanData,
    Course
  )
})
