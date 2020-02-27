'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'
const users = db.user
const createSlotConfigData = fakers.slotConfig

export function up(queryInterface, Sequelize) {
  return users
    .findOne({
      where: {
        email: 'admin@purpletutor.com'
      }
    })
    .then(function(user) {
      const { dataValues } = user
      const data = createSlotConfigData(dataValues.id)
      return queryInterface.bulkInsert('slot_config', data)
    })
}
export function down(queryInterface, Sequelize) {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkDelete('slot_config', null, {})
}
