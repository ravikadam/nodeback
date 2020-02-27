import { resolve } from 'path'

module.exports = (controllerUri) => {
  const controllerPath = resolve('src/interfaces/http/modules', controllerUri)
  const Controller = require(controllerPath)
  return Controller()
}
