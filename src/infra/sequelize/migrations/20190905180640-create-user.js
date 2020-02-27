'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    raw: Sequelize.TEXT,
    rank: Sequelize.INTEGER,
    grade: Sequelize.STRING(10),
    course_level_id: Sequelize.STRING(10),
    role: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['admin', 'student', 'tutor']
    },
    login_type: {
      type: Sequelize.ENUM,
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
    gender: Sequelize.STRING(1),
    otp: Sequelize.STRING(6),
    locale: Sequelize.STRING(10),
    zip: Sequelize.STRING(12),
    mobile: Sequelize.STRING(12),
    family_name: Sequelize.STRING(40),
    social_id: Sequelize.STRING(50),
    timezone: {
      type: Sequelize.STRING(50),
      defaultValue: 'Asia/Calcutta',
      allowNull: false
    },
    city: Sequelize.STRING(60),
    state: Sequelize.STRING(60),
    country: Sequelize.STRING(60),
    name: Sequelize.STRING(60),
    parent_name: Sequelize.STRING(60),
    email: Sequelize.STRING(75),
    password: Sequelize.STRING(200),
    image: Sequelize.STRING(500),
    parent_image: Sequelize.STRING(500),
    address: Sequelize.STRING(500),
    room_url: Sequelize.STRING(500),
    bio_url: Sequelize.STRING(500),
    profile_description: Sequelize.STRING(5000),
    credits: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email_verified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    mobile_verified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    secret: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('user')
}
