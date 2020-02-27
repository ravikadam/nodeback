'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payment_transaction', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_payment_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      gateway: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_success: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      gateway_payment_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gateway_response: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payment_transaction')
  }
}
