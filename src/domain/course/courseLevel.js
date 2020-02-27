import { struct, maybe, String } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

export const CourseLevel = struct({
  id: maybe(String),
  name: String
})

CourseLevel.prototype.getData = function () {
  return {
    course_level_id: this.id,
    course_level_name: this.name
  }
}

export default define('courseLevelDomain', () => {
  return compose(
    cleanData,
    CourseLevel
  )
})
