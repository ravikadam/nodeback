import { define } from '../../containerHelper'

const AWS = require('aws-sdk')

AWS.config.update({
    // accessKeyId: '{AWS_KEY}',
    // secretAccessKey: '{AWS_SECRET}',
    region: 'ap-south-1'
});

const snsfunctions = new AWS.SNS()

module.exports = define('postEventService', ({ config }) => {

    const publishEvent = async (event, payload) => {
        const messagePayload= {
            event:event,
            ...payload
        }
        const snsTopic = process.env.SNS_TOPIC
        const result = await snsfunctions.publish({
            Message: JSON.stringify(messagePayload),
            TopicArn: snsTopic
        }).promise()
        return result;
    }

    return {
        publishEvent: publishEvent
    }
})
