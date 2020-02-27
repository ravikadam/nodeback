'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('student_course', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    student_id: {
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
      values: [
        'TRIAL_TO_BE_SCHEDULED',
        'SCHEDULED_TRIAL',
        'PAID',
        'TRIAL_COMPLETED'
      ]
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
  return queryInterface.dropTable('student_course')
}
