import axios from 'axios'
const fs = require('fs')
const path = require('path')

module.exports = ({ config }) => {
  const token = config.sendGridApiKey
  const SENDGRID_BASE_URL = config.sendGridBaseUrl
  const senderEmail = config.sendGridSenderEmail
  const sendGridAPI = axios.create({
    baseURL: SENDGRID_BASE_URL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  const sendEmail = async (params = {}) => {
    const msg = {
      from: { email: senderEmail },
      personalizations: [
        {
          to: [{ email: params.email }],
          dynamic_template_data: {
            ...params
          }
        }
      ],
      template_id: params.template
    }
    if(params.attachments)
      msg.attachments = params.attachments
    
    if(params.bcc)
      msg.personalizations[0].bcc = [{ email: params.bcc }]

    try {
      await sendGridAPI.post('/mail/send', msg)
    } catch (e) {
      console.log('Error while sending email', e)
    }
  }

  return {
    sendEmail: sendEmail
  }
}
