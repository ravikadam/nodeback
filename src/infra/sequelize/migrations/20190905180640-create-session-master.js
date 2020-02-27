'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('session_master', {
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
    session_number: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sort: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    course_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    is_trial: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    document_url: Sequelize.STRING,
    description: Sequelize.TEXT,
    goals: Sequelize.TEXT,
    tagline: Sequelize.STRING(100),
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
  return queryInterface.dropTable('session_master')
}
