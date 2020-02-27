// eslint-disable-next-line no-unused-vars
const AWS = require('aws-sdk')
const axios = require('axios')
const { EMAIL_SENDER_ADDRESS } = process.env

module.exports.sendEmail = async event => {
  const api = axios.create({
    baseURL: EMAIL_SENDER_ADDRESS,
    timeout: 5000
  })

  const GET = async (params = {}) => {
    const response = await api.get('/', { params })
    return response
  }
  const result = await GET(event.body)
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' })
  }
  return response
}
