import { encryptPassword } from '../../../encryption'
import { name as _name } from 'faker'
import uuidv4 from 'uuid/v4'

const userData = [
  {
    email: 'admin@purpletutor.com',
    pass: 'admin@123',
    role: 'admin',
    mobile: '1111111111',
    locale: 'en',
    name: 'admin'
  },
  {
    email: 'yatish@purpletutor.com',
    pass: 'The!gens123',
    role: 'student',
    grade: '3',
    course_level_id: 'l1',
    mobile: '9767843495',
    gender: 'M',
    locale: 'en',
    family_name: 'Gupta',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    name: 'Hriyansh Gupta',
    parent_name: 'Yatish Gupta'
  },
  {
    email: 'fatima@purpletutor.com',
    pass: 'The!gens123',
    role: 'tutor',
    course_level_id: 'l1|l2|l3',
    mobile: '8879244115',
    gender: 'F',
    locale: 'en',
    family_name: 'Jilani',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    name: 'Fatima Humra Jilani'
  }
]
module.exports = (email, pass) => {
  return userData.map(user => {
    return {
      id: uuidv4(),
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      course_level_id: user.course_level_id,
      city: user.city,
      state: user.state,
      country: user.country,
      gender: user.gender,
      locale: user.locale,
      family_name: user.family_name,
      parent_name: user.parent_name,
      login_type: 'mobile',
      is_active: true,
      email_verified: true,
      mobile_verified: true,
      password: encryptPassword(user.pass),
      role: user.role,
      created_at: new Date(),
      updated_at: new Date()
    }
  })
}
