import { define } from '../../containerHelper'

module.exports = define('getSessionService', ({
  sessionMasterRepository,
  sessionsRepository,
  config: { appConfig },
  date
}) => {
  const { MAXIMUM_DAYS_OPEN_TRIAL_SLOT } = appConfig
  const { addDays, format } = date
  const getAllSessionMaster = async ({ userId, courseId }) => {
    return sessionMasterRepository.getAllByCourseId({
      userId,
      courseId
    })
  }

  const getSlotToBookTrial = async data =>
    sessionsRepository.getSlotToBookTrial(data)

  const getTrialSessions = async ({ courseId, startDate: currentDate }) => {
    const startDate = format(addDays(currentDate, 1))
    const endDate = format(
      addDays(currentDate, MAXIMUM_DAYS_OPEN_TRIAL_SLOT + 1)
    )
    const data = {
      startDate: startDate,
      endDate: endDate,
      courseId: courseId
    }

    return sessionsRepository.getTrialSessions(data)
  }

  const getSessionById = sessionId =>
    sessionsRepository.getSessionById(sessionId)

  const getNextSessionToBeBooked = async ({ studentId, courseId }) =>
    sessionMasterRepository.getNextSessionToBeBooked({
      studentId,
      courseId
    })

  return {
    getAllSessionMaster,
    getTrialSessions,
    getSlotToBookTrial,
    getNextSessionToBeBooked,
    getSessionById
  }
})
