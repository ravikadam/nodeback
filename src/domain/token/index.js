import { struct, String } from 'tcomb'
import { define } from '../../containerHelper'

const Token = struct({
  mobile: String,
  password: String
})

module.exports = define('tokenDomain', () => {
  return Token
})
