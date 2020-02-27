import { define } from '../../containerHelper'
import crypto from 'crypto'
import authenticator from 'otplib/authenticator'
const fs = require('fs')
const path = require('path')

module.exports = define('postCommunicationService', ({
  date,
  smsInfra,
  emailInfra,
  scheduleEmailMetaDomain,
  getUserService,
  getSlotService,
  constants: {
    TRIAL_CONFIRMATATION_EMAIL_TEMPLATE,
    TRIAL_SAMEHOUR_REMINDER_TEMPLATE,
    TRIAL_SAMEDAY_REMINDER_TEMPLATE,
    TRIAL_STARTING_TEMPLATE,
    STUDENT_TRIAL_COMPLETED_TEMPLATE
  },
  slackInfra
}) => {
  authenticator.options = { crypto }
  const Authenticator = authenticator.Authenticator
  const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
  const {
    timeFormatZone,
    userFormatZone,
    utc,
    substractHour,
    substractMinute,
    timeZoneDate,
    getHour,
    setTime,
    addDays
  } = date

  const trialComplete = async (studentId, tutorId, slotId) => {
    const [student, tutor, slot] = await Promise.all([
      getUserService.getUserById(studentId),
      getUserService.getUserById(tutorId),
      getSlotService.getSlotById(slotId)
    ])
    slackInfra.send(
      `Student: ${studentId} Completed the trial
        Details:
        Name: ${student.getName()}
        Grade: ${student.getGrade()}
        Parent Name: ${student.getParentName()}
        Mobile: ${student.getMobile()}
        Email: ${student.getEmail()}
      With Teacher ${tutorId}
        Details:
        Name: ${tutor.getName()}
        Mobile: ${tutor.getMobile()}
      At ${userFormatZone(slot.start_date)}
      On ${timeFormatZone(slot.start_date)}`,
      '#completed-classes'
    )

    const fileRelPath = '../../../public/media/'
    let fileName = 'EA.pdf'
    const stLevel = student.getCourseLevelId()
    if (stLevel == 'l1') fileName = 'LC.pdf'
    else if (stLevel == 'l2') fileName = 'YL.pdf'

    const fullFileName = `${fileRelPath}${fileName}`
    const attachment = fs
      .readFileSync(path.join(__dirname, fullFileName))
      .toString('base64')
    const attachments = [
      {
        content: attachment,
        fileName: fileName,
        type: 'application/pdf',
        disposition: 'attachment'
      }
    ]

    const data = {
      template: STUDENT_TRIAL_COMPLETED_TEMPLATE,
      email: student.getEmail(),
      parent_name: student.getParentName(),
      bcc: process.env.SALES_EMAIL,
      child_name: student.getName(),
      attachments: attachments
    }

    await emailInfra.SendEmail(data)
  }

  const noshow = async (studentId, tutorId, slotId, type) => {
    const [student, tutor, slot] = await Promise.all([
      getUserService.getUserById(studentId),
      getUserService.getUserById(tutorId),
      getSlotService.getSlotById(slotId)
    ])
    slackInfra.send(
      `Student: ${studentId} Did not show up
          Details:
          Name: ${student.getName()}
          Grade: ${student.getGrade()}
          Parent Name: ${student.getParentName()}
          Mobile: ${student.getMobile()}
          Email: ${student.getEmail()}
        In Teacher ${tutorId}'s class
          Details:
          Name: ${tutor.getName()}
          Mobile: ${tutor.getMobile()}
        At ${userFormatZone(slot.start_date)}
        On ${timeFormatZone(slot.start_date)}
        Due to: ${type}`,
      '#no-shows'
    )
  }

  const trialBooked = async (tutorId, studentId, timing) => {
    const slotDate = `${timeFormatZone(timing)} on ${userFormatZone(timing)}`
    const [student, tutor, secret] = await Promise.all([
      getUserService.getUserById(studentId),
      getUserService.getUserById(tutorId),
      getUserService.getSecret(studentId)
    ])
    const room_link = `${process.env.APP_BASE_URL}/api/${
      process.env.APP_VERSION
    }/auth/join/${secret}`
    const data = {
      parent_name: student.getParentName(),
      template: TRIAL_CONFIRMATATION_EMAIL_TEMPLATE,
      email: student.getEmail(),
      student_name: student.getName(),
      mobile: student.getMobile(),
      slot: slotDate,
      teacher_photo: tutor.getImage(),
      teacher_name: tutor.getName(),
      room_link: tutor.getRoomURL(), //room_link,
      teacher_bio: tutor.getBioURL(),
      teacher_profile: tutor.getProfileDescription()
    }
    //Send Booking Email
    emailInfra.SendEmail(data)
    //Send Booking SMS
    const msg = await smsInfra.getMessage('TRIAL_BOOKING', {
      student: data.student_name,
      tutor: data.teacher_name,
      timing: slotDate,
      help: process.env.HELPDESK_NUMBER
    })
    smsInfra.send(data.mobile, msg)
    //Send Booking Slack
    slackInfra.send(
      `Student: ${student.id} booked a trial
            Details:
            Name: ${data.student_name}
            Grade: ${student.getGrade()}
            Parent Name: ${data.parent_name}
            Timing: ${slotDate}
            Teacher: ${data.teacher_name}
            Mobile: ${data.mobile}
            Email: ${data.email}`,
      '#trialbookings'
    )

    //Schedule one minute reminders
    const tenMinuteDate = new Date(substractMinute(utc(timing), 10))
    const eventsData2 = scheduleEmailMetaDomain({
      due_date: tenMinuteDate,
      user_id: student.id,
      email_type: TRIAL_STARTING_TEMPLATE,
      template: TRIAL_STARTING_TEMPLATE,
      request_meta: {
        ...data,
        sms_msg: smsInfra.getMessage('TRIAL_STARTING', {
          student: data.student_name,
          room_link: tutor.getRoomURL(), //room_link,
          help: process.env.HELPDESK_NUMBER
        }),
        email_type: TRIAL_STARTING_TEMPLATE,
        dueDate: tenMinuteDate,
        template: TRIAL_STARTING_TEMPLATE,
        type: TRIAL_STARTING_TEMPLATE
      },
      created_by: student.id,
      updated_by: student.id
    })
    emailInfra.ScheduleEmail(eventsData2)

    //Schedule one hour reminders
    const oneHourDate = new Date(substractHour(utc(timing), 1))
    if (oneHourDate > new Date()) {
      const eventsData3 = scheduleEmailMetaDomain({
        due_date: oneHourDate,
        user_id: student.id,
        email_type: TRIAL_SAMEHOUR_REMINDER_TEMPLATE,
        template: TRIAL_SAMEHOUR_REMINDER_TEMPLATE,
        request_meta: {
          ...data,
          sms_msg: smsInfra.getMessage('TRIAL_REMINDER_SAMEHOUR', {
            student: data.student_name,
            room_link: tutor.getRoomURL(), //room_link,
            help: process.env.HELPDESK_NUMBER
          }),
          email_type: TRIAL_SAMEHOUR_REMINDER_TEMPLATE,
          dueDate: oneHourDate,
          template: TRIAL_SAMEHOUR_REMINDER_TEMPLATE,
          type: TRIAL_SAMEHOUR_REMINDER_TEMPLATE
        },
        created_by: student.id,
        updated_by: student.id
      })
      emailInfra.ScheduleEmail(eventsData3)
    }

    //Schedule same day reminders
    const dueSameDate = new Date(substractHour(utc(timing), 12))
    if (dueSameDate > new Date()) {
      const dueSameDateHours = getHour(timeZoneDate(dueSameDate))
      let dueDate = setTime(utc(timing), 8, 0)
      let today = 'Today'
      if (dueSameDateHours > 12) {
        dueDate = setTime(dueSameDate, 20, 0)
        today = 'Tomorrow'
      }

      const eventsData = scheduleEmailMetaDomain({
        due_date: new Date(dueDate),
        user_id: student.id,
        email_type: TRIAL_SAMEDAY_REMINDER_TEMPLATE,
        template: TRIAL_SAMEDAY_REMINDER_TEMPLATE,
        today: today,
        request_meta: {
          ...data,
          sms_msg: smsInfra.getMessage('TRIAL_REMINDER_SAMEDAY', {
            student: data.student_name,
            timing: slotDate,
            help: process.env.HELPDESK_NUMBER
          }),
          today: today,
          email_type: TRIAL_SAMEDAY_REMINDER_TEMPLATE,
          dueDate: new Date(dueDate),
          template: TRIAL_SAMEDAY_REMINDER_TEMPLATE,
          type: TRIAL_SAMEDAY_REMINDER_TEMPLATE
        },
        created_by: student.id,
        updated_by: student.id
      })
      emailInfra.ScheduleEmail(eventsData)
    }

    //Schedule last minute reminders
    //TODO: Only SMS here, a slack will also be great
  }

  const sendOTP = async mobile => {
    const token = await authenticator.generate(secret)
    const msg = await smsInfra.getMessage('OTP', { otp: token })
    const sent = await smsInfra.send(mobile, msg)
    await slackInfra.send(
      `OTP: ${token} was sent to Mobile: ${mobile}`,
      '#otprequests'
    )
    if (sent) return token

    return null
  }

  return {
    noshow: noshow,
    trialComplete: trialComplete,
    sendOTP: sendOTP,
    trialBooked: trialBooked
  }
})
