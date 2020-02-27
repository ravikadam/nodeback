import { define } from '../../containerHelper'

/**
 * function for saving session.
 */
module.exports = define('postSessionService', ({
  sessionsRepository,
  date,
  sessionsDomain,
  constants,
  CustomError
}) => {
  const { SESSION_OPEN, SESSION_BOOKED, SESSION_ALREADY_BOOKED } = constants

  const bookSession = async ({
    sessionMasterId,
    studentId,
    courseId,
    slotId,
    userId,
    tutorId
  }) => {
    const existingSession = await sessionsRepository.sessionByMasterId({
      sessionMasterId,
      studentId,
      courseId
    })
    if (!existingSession) {
      return sessionsRepository.createSession({
        session_master_id: sessionMasterId,
        student_id: studentId,
        tutor_id: tutorId,
        course_id: courseId,
        status: SESSION_BOOKED,
        created_by: userId,
        updated_by: userId,
        slot_id: slotId
      })
    }
    const { id, status } = existingSession
    if (status !== SESSION_OPEN) {
      throw new CustomError(
        SESSION_ALREADY_BOOKED.code,
        SESSION_ALREADY_BOOKED.status
      )
    }

    await _updateSession({
      sessionId: id,
      userId,
      status: SESSION_BOOKED,
      slotId,
      tutorId
    })
    return {
      id
    }
  }

  const openSession = async ({ sessionId, userId }) =>
    _updateSession({
      sessionId,
      userId,
      status: SESSION_OPEN,
      slotId: null,
      tutorId: null
    })

  const _updateSession = async ({
    sessionId,
    status,
    userId,
    slotId,
    tutorId
  }) =>
    sessionsRepository.update(
      {
        status: status,
        updated_by: userId,
        slot_id: slotId,
        tutor_id: tutorId
      },
      {
        where: {
          id: sessionId
        }
      }
    )

  const createSession = async data => sessionsRepository.createSession(data)

  const reshuffleSessions = async ({ studentId, courseId, userId }) => {
    const slotSortedSessions = await sessionsRepository.getSessionsByScheduledDate(
      {
        studentId,
        courseId
      }
    )
    const sessionMap = slotSortedSessions.reshuffle()
    const updateDataSet = sessionMap.map(t => {
      return {
        id: t.id,
        session_master_id: t.newSessionMasterId,
        updated_by: userId
      }
    })
    await sessionsRepository.upsertSessions(updateDataSet)
  }

  const updateSession = (session) => {
    const {userId,sessionId,status,...rest}=session
    return sessionsRepository.update(
      {
        status: status,
        updated_by: userId,
        ...rest
      },
      {
        where: {
          id: sessionId
        }
      }
    )
  }

  return {
    openSession,
    bookSession,
    createSession,
    reshuffleSessions,
    updateSession
  }
})
