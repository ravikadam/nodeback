'use strict'
module.exports = (sequelize, DataTypes) => {
  const sessionMaster = sequelize.define(
    'session_master',
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
      session_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      course_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      is_trial: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      document_url: DataTypes.STRING,
      description: DataTypes.TEXT,
      goals: DataTypes.TEXT,
      tagline: DataTypes.STRING(100),
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

  sessionMaster.associate = models => {
    sessionMaster.hasMany(models.course, {
      foreignKey: 'id',
      sourceKey: 'course_id'
    })

    sessionMaster.hasMany(models.sessions, {
      sourceKey: 'id',
      foreignKey: 'session_master_id'
    })
  }
  return sessionMaster
}
