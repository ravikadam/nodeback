import { struct, maybe, String, list } from 'tcomb'
import { define } from '../../containerHelper'

module.exports = define('bookingDomain', ({
  slotDomain,
  sessionActivityMasterDomain,
  sessionMasterDomain,
  constants,
  config: { appConfig },
  date
}) => {
  // TODO temparary solution. Need to look at replacing tComb
  const { BOOOKING_BOOKED } = constants
  const {
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_STUDENT_CANCEL_BOOKING,
    // eslint-disable-next-line no-unused-vars
    MINIMUM_DAYS_STUDENT_BOOK_SLOT
  } = appConfig

  const tempUserDomain = struct({
    id: String,
    name: String,
    mobile: maybe(String),
    room_url: maybe(String)
  })

  tempUserDomain.prototype.getData = function() {
    return {
      id: this.id,
      name: this.name,
      mobile: this.mobile,
      room_url: this.room_url
    }
  }

  const tempSessionDomain = struct({
    id: String,
    session_master_id: maybe(String),
    session_master: maybe(sessionMasterDomain),
    activities: maybe(list(sessionActivityMasterDomain))
  })

  tempSessionDomain.prototype.getData = function() {
    return {
      id: this.id,
      session_master_id: this.session_master_id,
      session_master: this.session_master.getData(),
      activities: this.activities.map(activity => activity.getData())
    }
  }

  const Booking = struct({
    id: maybe(String),
    tutor_id: maybe(String),
    tutor: maybe(tempUserDomain),
    course_id: maybe(String),
    student_id: maybe(String),
    student: maybe(tempUserDomain),
    session_id: maybe(String),
    session: maybe(tempSessionDomain),
    slot_id: maybe(String),
    slot: maybe(slotDomain),
    status: maybe(String),
    reservation_id: maybe(String),
    created_by: maybe(String),
    updated_by: maybe(String),
    meeting_url: maybe(String)
  })

  Booking.prototype.getId = function() {
    return this.id
  }

  Booking.prototype.getTutorId = function() {
    return this.tutor_id
  }

  Booking.prototype.getCourseId = function() {
    return this.course_id
  }

  Booking.prototype.getStudentId = function() {
    return this.student_id
  }

  Booking.prototype.getSessionId = function() {
    return this.session_id
  }

  Booking.prototype.getSlotId = function() {
    return this.slot_id
  }

  Booking.prototype.getStatusId = function() {
    return this.status
  }

  Booking.prototype.getReservationId = function() {
    return this.reservation_id
  }

  Booking.prototype.getCreatedBy = function() {
    return this.created_by
  }

  Booking.prototype.getUpdatedBy = function() {
    return this.updated_by
  }
  Booking.prototype.getMeetingUrl = function() {
    return this.meeting_url
  }
  Booking.prototype.getData = function() {
    return {
      id: this.id,
      tutor_id: this.getTutorId(),
      course_id: this.getCourseId(),
      student_id: this.getStudentId(),
      session_id: this.getSessionId(),
      slot_id: this.getSlotId(),
      status: this.getStatusId(),
      reservation_id: this.getReservationId(),
      created_by: this.getCreatedBy(),
      updated_by: this.getUpdatedBy(),
      slot: this.slot.getData(),
      tutor: this.tutor.getData(),
      student: this.student.getData(),
      session: this.session.getData(),
      meeting_url: this.getMeetingUrl()
    }
  }

  Booking.prototype.canCancelled = function(currentDate) {
    return (
      this.status === BOOOKING_BOOKED ||
      date.differenceInDays(currentDate, this.slot.getStartDate()) >
        MINIMUM_DAYS_STUDENT_CANCEL_BOOKING
    )
  }

  return Booking
})
