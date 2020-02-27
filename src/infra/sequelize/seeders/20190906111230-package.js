'use strict'
import db from '../seedHelper'
import fakers from '../../support/fakers'

const users = db.user
const createPaymentMasterData = fakers.paymentMaster

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
        const data = createPaymentMasterData(dataValues.id)
        return queryInterface.bulkInsert('package', data)
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('package', null, {})
  }
}
