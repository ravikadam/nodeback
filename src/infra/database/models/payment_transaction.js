'use strict'
module.exports = (sequelize, DataTypes) => {
  const paymentTransaction = sequelize.define('payment_transaction', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    user_payment_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    gateway: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_success: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    gateway_payment_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gateway_response: {
      type: DataTypes.STRING,
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
  }, {
    freezeTableName: true
  })

  paymentTransaction.associate = (models) => {
    paymentTransaction.belongsTo(models.user_payment, {
      targetKey: 'id',
      foreignKey: 'student_id',
      as: 'student'
    })
  }

  return paymentTransaction
}
