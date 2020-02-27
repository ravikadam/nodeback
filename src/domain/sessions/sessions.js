import { struct, list, maybe } from 'tcomb'
import { compose, sort } from 'ramda'
import { define } from '../../containerHelper'
import { cleanData } from '../helper'

const removeEmpty = entity => {
  if (entity.sessions) {
    const sessions = entity.sessions.map(s => {
      if (s && s.slot_id === null) {
        delete s.slot
      }

      return s
    })

    return { sessions }
  }

  return entity
}

module.exports = define('sessionsDomain', ({ sessionDomain }) => {
  const sessions = struct({
    sessions: maybe(list(sessionDomain))
  })

  sessions.prototype.getData = function() {
    return { sessions: this.sessions.map(s => s.getData()) }
  }

  sessions.prototype.getSortedSessionMasterId = function() {
    return sort(
      (s1, s2) => s1.getSessionMasterSort() - s2.getSessionMasterSort(),
      this.sessions
    ).map(s => s.getSessionMasterId())
  }

  sessions.prototype.reshuffle = function() {
    const sortedSessionMasterIds = this.getSortedSessionMasterId()
    return sort((s1, s2) => {
      if (s1.getSlotId() === null) {
        return 1
      } else if (s2.getSlotId() === null) {
        return -1
      } else {
        return 0
      }
    }, this.sessions)
      .map((s, ind) => {
        return {
          id: s.getId(),
          sessionMasterId: s.getSessionMasterId(),
          newSessionMasterId: sortedSessionMasterIds[ind]
        }
      })
      .filter(t => t.sessionMasterId !== t.newSessionMasterId)
  }

  return compose(
    cleanData,
    sessions,
    removeEmpty
  )
})
