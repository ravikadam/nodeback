'use strict'
module.exports = (sequelize, DataTypes) => {
  const coupon = sequelize.define('coupon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['percent', 'fixed']
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    max_amount: DataTypes.DECIMAL(10, 2),
    expiry_date: {
      type: DataTypes.DATE,
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

  coupon.associate = (models) => {
    // associations can be defined here
  }

  return coupon
}
