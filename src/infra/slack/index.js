const { WebClient } = require('@slack/web-api');
module.exports = ({ config }) => {
  const apiKey = process.env.SLACK_BOT_TOKEN
  const defaultChannel = process.env.SLACK_BUG_CHANNEL
  const slack = new WebClient(apiKey)

  const sendMessage = async function (message, channel = defaultChannel, ) {
    slack.chat.postMessage({ channel: channel, text: message })
  }
  return {
    send: sendMessage
  }
}
