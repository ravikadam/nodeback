'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'
const users = db.user
const createCourseLevelData = fakers.courseLevels

export function up(queryInterface, Sequelize) {
  return users
    .findOne({
      where: {
        email: 'admin@purpletutor.com'
      }
    })
    .then(function(user) {
      const { dataValues } = user
      const data = createCourseLevelData(dataValues.id)
      return queryInterface.bulkInsert('course_level', data)
    })
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('course_level', null, {})
}
