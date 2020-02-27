module.exports = {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  sendGridSenderEmail: process.env.SENDGRID_SENDER_EMAIL_ID,
  sendGridBaseUrl: process.env.SENDGRID_BASE_URL,
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false
  },
  authSecret: process.env.SECRET,
  authSession: {
    session: false
  },
  emailEndPoint: process.env.EMAIL_ENDPOINT,
  verificationEndPoint:
    process.env.APP_BASE_URL +
    '/' +
    process.env.APP_VERSION +
    '/' +
    process.env.VERIFICATION_ENDPOINT,
  clientLoginEndPoint:
    process.env.CLIENT_ENDPOINT + process.env.CLIENT_LOGIN_ENDPOINT,
  clientEndPoint: process.env.CLIENT_ENDPOINT,
  emailSchedulerEndPoint:
    'https://5ypgd3fkli.execute-api.ap-south-1.amazonaws.com/dev/scheduleemail',
  stopEmailSchedulerEndPoint:
    'https://5ypgd3fkli.execute-api.ap-south-1.amazonaws.com/dev/deScheduleemail'
}
