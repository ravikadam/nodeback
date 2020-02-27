'use strict'

import { readdirSync } from 'fs'
import { resolve, join, basename as _basename } from 'path'
require('dotenv').load()

const basePath = 'development'
const dir = resolve(`src/infra/support/fakers/${basePath}`)
const fakers = {}

readdirSync(dir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== _basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const fake = require(join(dir, file))
    const fileName = file.substring(0, file.indexOf('.'))

    fakers[fileName] = fake
  })
export default fakers
