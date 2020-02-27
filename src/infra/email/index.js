import axios from 'axios'


module.exports = ({ config, scheduleEmailRepository, sendGridInfra }) => {
  const api = axios.create({
    baseURL: config.emailEndPoint,
    timeout: 5000
  })

  const sendEmail = async (params = {}) => {
    const response = await sendGridInfra.sendEmail(params)
    return response
  }
  const schedule = async scheduleMeta => {
    const params = scheduleMeta.getRequestMeta()
    const response = await axios.post(config.emailSchedulerEndPoint, {
      ...params
    })
    const updatedscheduleMeta = scheduleMeta.setResponseMeta(
      response.data,
      scheduleMeta
    )
    return scheduleEmailRepository.create(updatedscheduleMeta.getData())
  }

  const stopScheduledEmail = async scheduleMeta => {
    const params = scheduleMeta.getResponseMeta()
    const response = await axios.post(config.stopEmailSchedulerEndPoint, {
      ...params
    })
    const stopDate = response.data.stopDate
    return scheduleEmailRepository.update(
      {
        stop_date: stopDate
      },
      {
        where: {
          id: scheduleMeta.getId()
        }
      }
    )
  }

  return {
    SendEmail: sendEmail,
    ScheduleEmail: schedule,
    StopScheduledEmails: stopScheduledEmail
  }
}
