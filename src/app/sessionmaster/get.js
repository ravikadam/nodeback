import { define } from '../../containerHelper'
module.exports = define('getSessionMasterService', ({
  sessionMasterRepository
}) => {
  const getTrialSessionByStudent = studentId =>
    sessionMasterRepository.getTrialSessionByStudent(studentId)

  return {
    getTrialSessionByStudent
  }
})
