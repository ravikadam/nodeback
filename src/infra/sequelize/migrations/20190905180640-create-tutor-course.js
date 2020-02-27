'use strict'
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('tutor_course', {
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
    course_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['SLOTS_TO_BE_OPENED', 'SLOTS_OPENED']
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
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
  return queryInterface.dropTable('tutor_course')
}
