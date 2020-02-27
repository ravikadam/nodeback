'use strict'
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    'booking',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      tutor_id: {
        type: DataTypes.UUID
      },
      course_id: {
        type: DataTypes.UUID
      },
      student_id: {
        type: DataTypes.UUID
      },
      session_id: {
        type: DataTypes.UUID
      },
      slot_id: {
        type: DataTypes.UUID
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reservation_id: {
        type: DataTypes.UUID
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

  Booking.associate = function(models) {
    Booking.belongsTo(models.user, {
      targetKey: 'id',
      foreignKey: 'tutor_id',
      as: 'tutor'
    })

    Booking.belongsTo(models.user, {
      targetKey: 'id',
      foreignKey: 'student_id',
      as: 'student'
    })

    Booking.belongsTo(models.course, {
      targetKey: 'id',
      foreignKey: 'course_id'
    })

    Booking.belongsTo(models.slot, {
      targetKey: 'id',
      foreignKey: 'slot_id'
    })

    Booking.belongsTo(models.sessions, {
      targetKey: 'id',
      foreignKey: 'session_id'
    })
  }
  return Booking
}
