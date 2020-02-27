'use strict'
module.exports = (sequelize, DataTypes) => {
  const scheduleMailsMeta = sequelize.define(
    'schedule_mails_meta',
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
      email_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      stop_date: { type: DataTypes.DATE },
      request_meta: DataTypes.JSON,
      response_meta: DataTypes.JSON,
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
  scheduleMailsMeta.associate = function(models) {
    scheduleMailsMeta.hasMany(models.user, {
      foreignKey: 'id',
      sourceKey: 'user_id'
    })
  }
  return scheduleMailsMeta
}
