'use strict'

module.exports = (sequelize, DataTypes) => {
  const slotConfig = sequelize.define('slot_config', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['trial', 'paid', 'both']
    },
    order: DataTypes.DECIMAL(10, 2),
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: DataTypes.DATE,
    start_time: {
      type: DataTypes.STRING
    },
    end_time: DataTypes.STRING,
    slot_config_type: {
      type: DataTypes.ENUM,
      values: ['day_wise', 'date_wise']
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
  }, {
    underscored: true,
    freezeTableName: true
  })
  slotConfig.associate = function (models) {
    // associations can be defined here

  }
  return slotConfig
}
