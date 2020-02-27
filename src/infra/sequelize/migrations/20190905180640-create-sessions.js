'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sessions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      student_id: {
        type: Sequelize.UUID
      },
      tutor_id: {
        type: Sequelize.UUID
      },
      course_id: {
        type: Sequelize.UUID
      },
      is_reschedulable: {
        type: Sequelize.BOOLEAN
      },
      is_trial: {
        type: Sequelize.BOOLEAN
      },
      slot_id: {
        type: Sequelize.UUID
      },
      status: Sequelize.STRING(10),
      session_master_id: Sequelize.UUID,
      created_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.UUID
      },
      updated_at: {
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.UUID
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sessions')
  }
}
