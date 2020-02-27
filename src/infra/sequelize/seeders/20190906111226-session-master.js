'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'
const courseLevels = db.course_level
const courseMaster = db.course
const createBegineerSessionData = fakers.sessionsBegineer
const createIntermediateSessionData = fakers.sessionsIntermediate
const createAdvancedSessionData = fakers.sessionsAdvanced

export function up(queryInterface, Sequelize) {
  return courseMaster
    .findOne({
      include: {
        model: courseLevels,
        as: 'course_levels',
        where: {
          name: 'Lil Champs'
        }
      }
    })
    .then(function(course) {
      const { dataValues } = course
      return queryInterface.bulkInsert(
        'session_master',
        createBegineerSessionData(dataValues.id, dataValues.created_by)
      )
    })
    .then(() =>
      courseMaster.findOne({
        include: {
          model: courseLevels,
          as: 'course_levels',
          where: {
            name: 'Young Learners'
          }
        }
      })
    )
    .then(function(course) {
      const { dataValues } = course
      return queryInterface.bulkInsert(
        'session_master',
        createIntermediateSessionData(dataValues.id, dataValues.created_by)
      )
    })
    .then(() =>
      courseMaster.findOne({
        include: {
          model: courseLevels,
          as: 'course_levels',
          where: {
            name: 'Early Achievers'
          }
        }
      })
    )
    .then(function(course) {
      const { dataValues } = course
      return queryInterface.bulkInsert(
        'session_master',
        createAdvancedSessionData(dataValues.id, dataValues.created_by)
      )
    })
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('session_master', null, {})
}
