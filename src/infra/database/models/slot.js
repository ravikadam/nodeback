'use strict'
module.exports = (sequelize, DataTypes) => {
  const slot = sequelize.define(
    'slot',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      slot_config_id: DataTypes.UUID,
      tutor_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE
      },
      end_date: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: ['closed', 'open', 'booked', 'deallocated', 'reserved']
      },
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID
    },
    {
      underscored: true,
      freezeTableName: true
    }
  )

  slot.associate = function(models) {
    // associations can be defined here
    slot.hasMany(models.slot_config, {
      foreignKey: 'id',
      sourceKey: 'slot_config_id'
    })

    slot.hasMany(models.user, {
      foreignKey: 'id',
      sourceKey: 'tutor_id'
    })

    slot.hasMany(models.booking, { foreignKey: 'slot_id', sourceKey: 'id' })
    slot.hasMany(models.sessions, { foreignKey: 'slot_id', sourceKey: 'id' })
  }
  return slot
}
