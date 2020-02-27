'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_credit', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      credit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      is_credit: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_trial: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      booking_id: Sequelize.UUID,
      slot_id: Sequelize.UUID,
      session_id: Sequelize.UUID,
      payment_id: Sequelize.UUID,
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
    return queryInterface.dropTable('user_credit')
  }
}
