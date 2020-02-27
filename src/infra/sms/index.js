import axios from 'axios'

module.exports = ({ config }) => {
  const apiKey = process.env.PROVIDER_KEY
  const api = axios.create({
    baseURL: process.env.PROVIDER_URL,
    timeout: process.env.PROVIDER_TIMEOUT
  })
  const templates = {
    OTP:
      'OTP is {{otp}} for confirmation of your mobile with PurpleTutor. Do not share OTP for security reasons.',
    TRIAL_BOOKING:
      "{{student}}'s Coding class with {{tutor}} is confirmed for {{timing}}. HelpDesk: {{help}}",
    TRIAL_REMINDER_SAMEDAY:
      "Don't forget the Coding class for {{student}} is scheduled on {{timing}}. Call {{help}} for any help.",
    TRIAL_REMINDER_SAMEHOUR:
      'Coding class for {{student}} is starting in an hour at {{room_link}} Call {{help}} for any help.',
    TRIAL_STARTING:
      'Coding class for {{student}} is starting. Open {{room_link}} in google chrome on your LAPTOP. HelpDesk: {{help}}'
  }
  const getMessage = function(tmpt, obj) {
    const keys = Object.keys(obj)
    let msg = templates[tmpt]
    if (keys && keys.length > 0) {
      keys.forEach(function(k) {
        msg = msg.split('{{' + k + '}}').join(obj[k])
      })
    }

    return msg
  }
  const sendSms = async function(mobileNumber, message) {
    const sent = await api.post(
      process.env.PROVIDER_METHOD,
      {},
      {
        params: {
          apikey: apiKey,
          message: message,
          sender: process.env.SENDER_KEY,
          numbers: mobileNumber
        }
      }
    )

    return sent.data.status
  }

  return {
    send: sendSms,
    getMessage: getMessage
  }
}
