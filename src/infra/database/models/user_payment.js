'use strict'
module.exports = (sequelize, DataTypes) => {
  const userPayment = sequelize.define(
    'user_payment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      package_id: DataTypes.UUID,
      type: {
        type: DataTypes.ENUM,
        values: ['offline', 'online', 'payment_gateway']
      },
      coupon_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      credits: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      final_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      invoice_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM,
        values: ['initiated', 'in-progress', 'done']
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

  userPayment.associate = models => {
    userPayment.belongsTo(models.package, {
      targetKey: 'id',
      foreignKey: 'package_id',
      as: 'package'
    })

    userPayment.belongsTo(models.user, {
      targetKey: 'id',
      foreignKey: 'user_id',
      as: 'user'
    })

    userPayment.belongsTo(models.coupon, {
      targetKey: 'id',
      foreignKey: 'coupon_id',
      as: 'coupon'
    })
  }

  return userPayment
}
