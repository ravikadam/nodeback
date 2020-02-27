'use strict'
module.exports = (sequelize, DataTypes) => {
  const verificationToken = sequelize.define(
    'verification_token',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
  verificationToken.associate = function(models) {
    verificationToken.belongsTo(models.user, {
      foreignKey: 'user_id',
      targetKey: 'id'
    })
  }
  return verificationToken
}
