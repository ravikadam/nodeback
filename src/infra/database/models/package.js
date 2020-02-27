'use strict'
module.exports = (sequelize, DataTypes) => {
  const paymentMaster = sequelize.define(
    'package',
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
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['subscription', 'renew_subscription']
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

  paymentMaster.associate = models => {
    // associations can be defined here
  }

  return paymentMaster
}
