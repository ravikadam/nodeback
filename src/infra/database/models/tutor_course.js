'use strict'
module.exports = (sequelize, DataTypes) => {
  const tutorCourse = sequelize.define(
    'tutor_course',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      tutor_id: {
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
        values: ['SLOTS_TO_BE_OPENED', 'SLOTS_OPENED']
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
  tutorCourse.associate = models => {
    tutorCourse.hasMany(models.user, {
      foreignKey: 'id',
      sourceKey: 'tutor_id'
    })
    tutorCourse.hasMany(models.course, {
      foreignKey: 'id',
      sourceKey: 'course_id'
    })
  }
  return tutorCourse
}
