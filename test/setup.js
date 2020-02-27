import request from 'supertest'
import { expect } from 'chai'
import container, { resolve } from 'src/container'
const server = resolve('server')
const config = resolve('config')
const logger = resolve('logger')
/**
 * turn off logger since we are testing on winston
 */
logger.silent(false) // turns off

global.expect = expect
global.app = container
global.request = request(server.app)
global.config = config
