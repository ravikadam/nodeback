'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_payment', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      package_id: Sequelize.UUID,
      type: {
        type: Sequelize.ENUM,
        values: ['offline', 'online', 'payment_gateway']
      },
      coupon_id: Sequelize.UUID,
      user_id: Sequelize.UUID,
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      credits: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      final_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      invoice_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['initiated', 'in-progress', 'done']
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
    return queryInterface.dropTable('user_payment')
  }
}
