const AWS = require('aws-sdk')
const stepfunctions = new AWS.StepFunctions()

module.exports.scheduleEmail = async (event, context) => {
  const body = JSON.parse(event.body)
  const stateMachineArn = process.env.STATEMACHINE_ARN
  const result = await stepfunctions.startExecution({
    stateMachineArn,
    input: JSON.stringify({
      dueDate: body.dueDate, body: body
    })
  }).promise()
  console.log(`State machine ${stateMachineArn} executed successfully`, result)
  var response = {
    'statusCode': 200,
    'headers': {
      'my_header': 'my_value'
    },
    'body': JSON.stringify(result),
    'isBase64Encoded': false
  }
  return response
}
