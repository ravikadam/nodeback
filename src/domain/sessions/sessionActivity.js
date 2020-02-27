import { struct, maybe, String, Number } from 'tcomb'
import { define } from '../../containerHelper'

module.exports = define('sessionActivityMasterDomain', () => {
  const SessionActivityMaster = struct({
    id: maybe(String),
    name: String,
    link: String,
    sort: Number,
    type: String
  })

  SessionActivityMaster.prototype.getData = function() {
    return {
      id: this.id,
      name: this.name,
      link: this.link,
      sort: this.sort,
      type: this.type
    }
  }
  return SessionActivityMaster
})
