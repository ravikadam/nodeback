'use strict'
module.exports = (sequelize, DataTypes) => {
  const studentCourse = sequelize.define(
    'student_course',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      student_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      course_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        values: [
          'TRIAL_TO_BE_SCHEDULED',
          'SCHEDULED_TRIAL',
          'PAID',
          'TRIAL_COMPLETED'
        ]
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false
      },
      updated_by: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  )
  studentCourse.associate = models => {
    studentCourse.hasMany(models.user, {
      foreignKey: 'id',
      sourceKey: 'student_id'
    })
    studentCourse.hasMany(models.course, {
      foreignKey: 'id',
      sourceKey: 'course_id'
    })
  }
  return studentCourse
}
