import { struct, maybe, String, Boolean, Number } from 'tcomb'
import { define } from '../../containerHelper'

module.exports = define('sessionMasterDomain', () => {
  const SessionMaster = struct({
    id: maybe(String),
    name: maybe(String),
    session_number: maybe(String),
    document_url: maybe(String),
    is_trial: maybe(Boolean),
    sort: maybe(Number),
    description: maybe(String)
  })

  SessionMaster.prototype.getSort = function() {
    return this.sort
  }

  SessionMaster.prototype.getId = function() {
    return this.id
  }

  SessionMaster.prototype.getData = function() {
    return {
      id: this.id,
      name: this.name,
      session_number: this.session_number,
      document_url: this.document_url,
      is_trial: this.is_trial,
      sort: this.sort,
      description: this.description
    }
  }
  return SessionMaster
})
