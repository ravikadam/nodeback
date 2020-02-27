import { sign, verify as _verify, decode as _decode } from 'jsonwebtoken'
import { compose, trim, replace, partialRight } from 'ramda'
import uuidv4 from 'uuid/v4'

module.exports = ({ config, redisClient }) => ({
  signin: (options) => (payload) => {
    const opt = Object.assign({}, options)
    const tk = uuidv4()
    const pData = {
      tk: tk
    }
    redisClient.setKey(tk, payload)
    return sign(pData, config.authSecret, opt)
  },
  verify: (options) => (token) => {
    const opt = Object.assign({}, options)
    return _verify(token, config.authSecret, opt)
  },
  decode: (options) => (token) => {
    const opt = Object.assign({}, options)
    const decodeToken = compose(
      partialRight(_decode, [opt]),
      trim,
      replace(/JWT|jwt/g, '')
    )

    return decodeToken(token)
  }
})
