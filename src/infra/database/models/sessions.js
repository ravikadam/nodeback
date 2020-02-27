'use strict'
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define(
    'sessions',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      student_id: DataTypes.UUID,
      course_id: DataTypes.UUID,
      is_trial: DataTypes.BOOLEAN,
      status: {
        type: DataTypes.ENUM,
        values: ['closed', 'open', 'booked', 'reserved', 'deallocated']
      },
      session_master_id: DataTypes.UUID,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      updated_by: DataTypes.UUID,
      created_by: DataTypes.UUID,
      slot_id: DataTypes.UUID,
      is_reschedulable: DataTypes.BOOLEAN,
      tutor_comment: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  )
  Sessions.associate = function(models) {
    Sessions.belongsTo(models.session_master, {
      targetKey: 'id',
      foreignKey: 'session_master_id'
    })

    Sessions.belongsTo(models.user, {
      targetKey: 'id',
      foreignKey: 'tutor_id',
      as: 'tutor'
    })

    Sessions.belongsTo(models.user, {
      targetKey: 'id',
      foreignKey: 'student_id',
      as: 'student'
    })
    Sessions.hasMany(models.session_activity, {
      foreignKey: 'session_master_id',
      sourceKey: 'session_master_id',
      as: 'activities'
    })

    Sessions.belongsTo(models.slot, {
      targetKey: 'id',
      foreignKey: 'slot_id'
    })
  }
  return Sessions
}
