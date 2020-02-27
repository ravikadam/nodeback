'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'

const users = db.user
const coupon = fakers.coupon

module.exports = {
  up: (queryInterface, Sequelize) => {
    return users
      .findOne({
        where: {
          email: 'admin@purpletutor.com'
        }
      })
      .then(function(user) {
        const { dataValues } = user
        const data = coupon(dataValues.id)
        return queryInterface.bulkInsert('coupon', data)
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coupon', null, {})
  }
}
