import { struct, maybe, String, Boolean, list } from 'tcomb'
import { define } from '../../containerHelper'

module.exports = define('sessionDomain', ({
  sessionMasterDomain,
  sessionActivityMasterDomain,
  slotDomain
}) => {
  const tempUserDomain = struct({
    id: maybe(String),
    name: maybe(String),
    mobile: maybe(String)
  })

  const Sessions = struct({
    id: maybe(String),
    tutor_id: maybe(String),
    course_id: maybe(String),
    student_id: maybe(String),
    tutor: maybe(tempUserDomain),
    student: maybe(tempUserDomain),
    session_master: maybe(sessionMasterDomain),
    status: maybe(String),
    is_trial: maybe(Boolean),
    created_by: maybe(String),
    updated_by: maybe(String),
    slot_id: maybe(String),
    slot: maybe(slotDomain),
    meeting_url: maybe(String),
    is_reschedulable: maybe(Boolean),
    tutor_comment: maybe(String),
    activities: maybe(list(sessionActivityMasterDomain))
  })

  Sessions.prototype.getTutorComment = function() {
    return this.tutor_comment
  }

  Sessions.prototype.getId = function() {
    return this.id
  }

  Sessions.prototype.getTutorId = function() {
    return this.tutor_id
  }

  Sessions.prototype.getCourseId = function() {
    return this.course_id
  }

  Sessions.prototype.getStudentId = function() {
    return this.student_id
  }

  Sessions.prototype.getSlotId = function() {
    return this.slot_id
  }

  Sessions.prototype.getStatusId = function() {
    return this.status
  }

  Sessions.prototype.getCreatedBy = function() {
    return this.created_by
  }

  Sessions.prototype.getUpdatedBy = function() {
    return this.updated_by
  }

  Sessions.prototype.getTrial = function() {
    return this.is_trial
  }
  Sessions.prototype.getReschedulable = function() {
    return this.is_reschedulable
  }

  Sessions.prototype.getSlotId = function() {
    return this.slot_id
  }
  Sessions.prototype.getMeetingUrl = function() {
    return this.meeting_url
  }

  Sessions.prototype.getSessionMasterSort = function() {
    return this.session_master.getSort()
  }

  Sessions.prototype.getSessionMasterId = function() {
    return this.session_master.getId()
  }

  Sessions.prototype.getData = function() {
    return {
      id: this.id,
      tutor_id: this.getTutorId(),
      course_id: this.getCourseId(),
      student_id: this.getStudentId(),
      status: this.getStatusId(),
      created_by: this.getCreatedBy(),
      updated_by: this.getUpdatedBy(),
      is_trial: this.getTrial(),
      is_reschedulable: this.getReschedulable(),
      slot_id: this.getSlotId(),
      meeting_url: this.getMeetingUrl(),
      tutor_comment: this.getTutorComment(),
      slot: this.slot.getData()
    }
  }

  return Sessions
})
