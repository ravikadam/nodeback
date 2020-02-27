'use strict'
module.exports = (sequelize, DataTypes) => {
  const userCredit = sequelize.define(
    'user_credit',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      credit: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      is_credit: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      is_trial: { type: DataTypes.BOOLEAN, allowNull: false },
      booking_id: DataTypes.UUID,
      slot_id: DataTypes.UUID,
      session_id: DataTypes.UUID,
      payment_id: DataTypes.UUID,
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
  userCredit.associate = function(models) {
    // associations can be defined here
  }
  return userCredit
}
