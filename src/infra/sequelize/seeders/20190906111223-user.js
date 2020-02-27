'use strict'
import fakers from '../../support/fakers'
const createUsers = fakers.users

export function up(queryInterface, Sequelize) {
  const data = createUsers()
  return queryInterface.bulkInsert('user', data)
}

export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('user', null, {})
}
