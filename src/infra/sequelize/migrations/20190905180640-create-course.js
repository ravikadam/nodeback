'use strict'
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('course', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: Sequelize.TEXT,
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    course_level_id: {
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
  return queryInterface.dropTable('course')
}
