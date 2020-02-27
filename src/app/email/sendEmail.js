import { define } from '../../containerHelper'

module.exports = define('emailService', ({
  emailInfra,
  constants: { TRIAL_CONFIRMATATION_EMAIL_TEMPLATE },
  userDomain,
  verificationDomain,
  config,
  date,
  scheduleEmailMetaDomain,
  scheduleEmailRepository
}) => {
  const stopScheduledEmail = async scheduledEmails => {
    for (let i = 0; i < scheduledEmails.length; i++) {
      await emailInfra.StopScheduledEmails(scheduledEmails[i])
    }
  }

  const sendAdhocTrialBookingMail = async ({ tutor, student, slotDate }) => {
    const data = {
      parent_name: student.getParentName(),
      template: TRIAL_CONFIRMATATION_EMAIL_TEMPLATE,
      email: student.getEmail(),
      student_name: student.getName(),
      mobile: student.getMobile(),
      slot: slotDate,
      teacher_photo: tutor.getImage(),
      teacher_name: tutor.getName(),
      room_link: tutor.getRoomURL(),
      teacher_bio: tutor.getBioURL(),
      teacher_profile: tutor.getProfileDescription()
    }
    await emailInfra.SendEmail(data)
  }

  const sendDiwaliDhamaka = async emails => {
    for (let i = 0; i < emails.length; i++) {
      const data = {
        Sender_Name: 'Gaurav Perti',
        Sender_Address:
          'B1-401, Kanakia Boomerang, Chandivali Rd, Yadav Nagar, Chandivali, Powai',
        Sender_City: 'Mumbai',
        Sender_State: 'Maharashtra',
        Sender_Zip: '400072',
        template: 'd-507da71b506746ecb5272aa997c95fd9',
        email: emails[i]
      }

      await emailInfra.SendEmail(data)
    }
  }

  return {
    sendDiwaliDhamaka,
    sendAdhocTrialBookingMail
  }
})
