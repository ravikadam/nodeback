'use strict'
import { encryptPassword } from '../../encryption'

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      raw: DataTypes.TEXT,
      rank: DataTypes.INTEGER,
      grade: DataTypes.STRING(10),
      course_level_id: DataTypes.STRING(10),
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['admin', 'student', 'tutor']
      },
      login_type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          'email',
          'mobile',
          'google',
          'facebook',
          'linkedin',
          'apple',
          'microsoft',
          'github',
          'twitter',
          'amazon',
          'instagram'
        ]
      },
      gender: DataTypes.STRING(1),
      otp: DataTypes.STRING(6),
      locale: DataTypes.STRING(10),
      zip: DataTypes.STRING(12),
      mobile: DataTypes.STRING(12),
      family_name: DataTypes.STRING(40),
      social_id: DataTypes.STRING(50),
      timezone: {
        type: DataTypes.STRING(50),
        defaultValue: 'Asia/Calcutta',
        allowNull: false
      },
      city: DataTypes.STRING(60),
      state: DataTypes.STRING(60),
      country: DataTypes.STRING(60),
      name: DataTypes.STRING(60),
      parent_name: DataTypes.STRING(60),
      email: DataTypes.STRING(75),
      password: DataTypes.STRING(200),
      image: DataTypes.STRING(500),
      parent_image: DataTypes.STRING(500),
      address: DataTypes.STRING(500),
      room_url: DataTypes.STRING(500),
      bio_url: DataTypes.STRING,
      profile_description: DataTypes.STRING(5000),
      secret: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      mobile_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      freezeTableName: true
    }
  )
  users.associate = models => {
    users.hasMany(models.course_level, {
      foreignKey: 'id',
      sourceKey: 'course_level_id'
    })
    users.hasOne(models.verification_token, {
      foreignKey: 'user_id',
      sourceKey: 'id'
    })
    users.hasMany(models.student_course, {
      foreignKey: 'student_id',
      sourceKey: 'id'
    })
    users.hasMany(models.slot, {
      foreignKey: 'tutor_id',
      sourceKey: 'id'
    })
    users.hasMany(models.tutor_course, {
      foreignKey: 'tutor_id',
      sourceKey: 'id'
    })
  }

  users.beforeCreate(async (user, options) => {
    const hashedPw = await encryptPassword(user.password)
    user.password = hashedPw
  })
  return users
}
