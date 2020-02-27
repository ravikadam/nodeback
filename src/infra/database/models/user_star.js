'use strict'
module.exports = (sequelize, DataTypes) => {
  const userStar = sequelize.define(
    'user_star',
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
      tutor_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      session_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      star: {
        type: DataTypes.INTEGER,
        allowNull: false
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
      underscored: true,
      freezeTableName: true
    }
  )
  userStar.associate = function(models) {
    // associations can be defined here
  }
  return userStar
}
