import { join } from 'path'
import database from './index'
const config = require('../../../config')
const basePath = join(__dirname, '../database')

export default database({ config: config.db, basePath })
