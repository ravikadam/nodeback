'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('slot', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      tutor_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      slot_config_id: Sequelize.UUID,
      start_date: {
        type: Sequelize.DATE
      },
      end_date: Sequelize.DATE,
      status: Sequelize.STRING,
      created_by: Sequelize.UUID,
      updated_by: Sequelize.UUID,
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
    return queryInterface.dropTable('slot')
  }
}
