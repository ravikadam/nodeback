'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'
const sessionMaster = db.session_master
const createActivityData = fakers.sessionActivity

export function up(queryInterface, Sequelize) {
  return sessionMaster
    .findAll({
      raw: true,
      attributes: ['id', 'session_number', 'created_by']
    })
    .then(function(sessionMaster) {
      const data = createActivityData(sessionMaster)

      return queryInterface.bulkInsert('session_activity', data)
    })
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('session_activity', null, {})
}
