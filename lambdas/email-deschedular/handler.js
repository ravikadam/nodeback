const AWS = require('aws-sdk')
const stepfunctions = new AWS.StepFunctions()

module.exports.deScheduleEmail = async (event, context) => {
  const body = JSON.parse(event.body)
  const result = await stepfunctions
    .stopExecution({
      executionArn: body.executionArn
    })
    .promise()
  var response = {
    statusCode: 200,
    headers: {
      my_header: 'my_value'
    },
    body: JSON.stringify(result),
    isBase64Encoded: false
  }
  return response
}
