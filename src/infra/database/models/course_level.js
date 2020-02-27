'use strict'
module.exports = (sequelize, DataTypes) => {
  const courseLevelMaster = sequelize.define(
    'course_level',
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
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

  courseLevelMaster.associate = models => {
    courseLevelMaster.belongsTo(models.user, {
      foreignKey: 'id',
      targetKey: 'course_level_id'
    })
  }

  return courseLevelMaster
}
