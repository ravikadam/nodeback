'use strict'
module.exports = (sequelize, DataTypes) => {
  const sessionActivityMaster = sequelize.define(
    'session_activity',
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
      link: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['student_activity', 'tutor_activity']
      },
      sort: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      session_master_id: DataTypes.UUID,
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
      underscored: true,
      freezeTableName: true
    }
  )
  sessionActivityMaster.associate = function(models) {}
  return sessionActivityMaster
}
