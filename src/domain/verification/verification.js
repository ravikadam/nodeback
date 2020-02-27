
import { struct, maybe, String, Date } from 'tcomb'
import { compose } from 'ramda'
import { cleanData } from '../helper'
import { define } from '../../containerHelper'

const Verification = struct({
  id: maybe(String),
  user_id: String,
  token: String,
  created_at: maybe(Date),
  updated_at: maybe(Date),
  created_by: maybe(String),
  updated_by: maybe(String)
})

Verification.prototype.getLink = function (baseUrl) {
  return baseUrl + '/' + this.token
}

Verification.prototype.getUserId = function () {
  return this.user_id
}

module.exports = define('verificationDomain', () => {
  return compose(
    cleanData,
    Verification
  )
})
