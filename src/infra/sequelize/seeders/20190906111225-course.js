'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'
const courseLevels = db.course_level
const createCourseData = fakers.courses

export function up(queryInterface, Sequelize) {
  return courseLevels
    .findAll({
      attributes: ['id', 'name', 'created_by']
    })
    .then(function(courseLevels) {
      return queryInterface.bulkInsert('course', createCourseData(courseLevels))
    })
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('course', null, {})
}
