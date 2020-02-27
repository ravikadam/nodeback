import { resolve } from 'path'
const dotEnvPath = resolve('.env')

/**
 * since mocha don't see enviroment variables we have to use dotenv
 */
require('dotenv').config({ path: dotEnvPath })

module.exports = {
  'host': process.env.REDIS_HOST,
  'port': process.env.REDIS_PORT
}
