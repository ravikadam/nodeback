import { resolve } from 'path'
const dotEnvPath = resolve('.env')

/**
 * since mocha don't see enviroment variables we have to use dotenv
 */
require('dotenv').config({ path: dotEnvPath })

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: true // -->Add this line. for reading from database
    }
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: true // -->Add this line. for reading from database
    }
  },
  staging: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: true // -->Add this line. for reading from database
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: true // -->Add this line. for reading from database
    }
  }
}
