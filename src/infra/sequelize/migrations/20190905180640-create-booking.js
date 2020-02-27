'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('booking', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    tutor_id: {
      type: Sequelize.UUID
    },
    course_id: {
      type: Sequelize.UUID
    },
    student_id: {
      type: Sequelize.UUID
    },
    session_id: {
      type: Sequelize.UUID
    },
    slot_id: {
      type: Sequelize.UUID
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    reservation_id: {
      type: Sequelize.UUID
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
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('booking')
}
