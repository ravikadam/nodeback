'use strict'
module.exports = (sequelize, DataTypes) => {
  const courseMaster = sequelize.define(
    'course',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      course_level_id: {
        type: DataTypes.UUID
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

  courseMaster.associate = models => {
    // associations can be defined here
    courseMaster.hasMany(models.course_level, {
      as: 'course_levels',
      foreignKey: 'id',
      sourceKey: 'course_level_id'
    })
    courseMaster.hasMany(models.tutor_course, {
      foreignKey: 'course_id',
      sourceKey: 'id'
    })
    courseMaster.hasMany(models.student_course, {
      foreignKey: 'course_id',
      sourceKey: 'id'
    })
  }
  return courseMaster
}
