import { struct, maybe, String, Date, Boolean, Integer } from 'tcomb'
import { define } from '../../containerHelper'
import fromJSON from 'tcomb/lib/fromJSON'

Boolean.fromJSON = x => {
  return typeof x === 'string' ? x === '1' : x
}

const User = struct({
  is_active: maybe(Boolean),
  email_verified: maybe(Boolean),
  mobile_verified: maybe(Boolean),
  credits: maybe(Integer),
  rank: maybe(Integer),
  id: maybe(String),
  raw: maybe(String),
  otp: maybe(String),
  zip: maybe(String),
  city: maybe(String),
  name: maybe(String),
  role: maybe(String),
  email: maybe(String),
  image: maybe(String),
  state: maybe(String),
  gender: maybe(String),
  locale: maybe(String),
  mobile: maybe(String),
  address: maybe(String),
  country: maybe(String),
  timezone: maybe(String),
  grade: maybe(String),
  course_level_id: maybe(String),
  password: maybe(String),
  social_id: maybe(String),
  login_type: maybe(String),
  family_name: maybe(String),
  parent_name: maybe(String),
  parent_image: maybe(String),
  created_at: maybe(Date),
  updated_at: maybe(Date),
  room_url: maybe(String),
  bio_url: maybe(String),
  profile_description: maybe(String)
})

User.prototype.getProfileDescription = function() {
  return this.profile_description
}

User.prototype.getBioURL = function() {
  return this.bio_url
}

User.prototype.getRoomURL = function() {
  return this.room_url
}

User.prototype.getRank = function() {
  return this.rank
}

User.prototype.getId = function() {
  return this.id
}

User.prototype.getRole = function() {
  return this.role
}

User.prototype.getName = function() {
  return this.name
}

User.prototype.getEmail = function() {
  return this.email
}

User.prototype.getParentName = function() {
  return this.parent_name
}

User.prototype.getMobile = function() {
  return this.mobile
}

User.prototype.getIsActive = function() {
  return this.is_active
}

User.prototype.getPassword = function() {
  return this.password
}

User.prototype.getGrade = function() {
  return this.grade
}

User.prototype.getCourseLevelId = function() {
  return this.course_level_id
}

User.prototype.getLoginType = function() {
  return this.login_type
}

User.prototype.getRaw = function() {
  return this.raw
}

User.prototype.getGender = function() {
  return this.gender
}

User.prototype.getOTP = function() {
  return this.otp
}

User.prototype.getLocale = function() {
  return this.locale
}

User.prototype.getZIP = function() {
  return this.zip
}

User.prototype.getFamilyName = function() {
  return this.family_name
}

User.prototype.getSocialId = function() {
  return this.social_id
}

User.prototype.getTimezone = function() {
  return this.timezone
}

User.prototype.getCity = function() {
  return this.city
}

User.prototype.getState = function() {
  return this.state
}

User.prototype.getCountry = function() {
  return this.country
}

User.prototype.getImage = function() {
  return this.image
}

User.prototype.getParentImage = function() {
  return this.parent_image
}

User.prototype.getAddress = function() {
  return this.address
}

User.prototype.getCredits = function() {
  return this.credits
}

User.prototype.getEmailVerified = function() {
  return this.email_verified
}

User.prototype.getMobileVerified = function() {
  return this.mobile_verified
}

User.prototype.getData = function() {
  return {
    id: this.id,
    otp: this.getOTP(),
    zip: this.getZIP(),
    raw: this.getRaw(),
    city: this.getCity(),
    name: this.getName(),
    role: this.getRole(),
    rank: this.getRank(),
    email: this.getEmail(),
    image: this.getImage(),
    state: this.getState(),
    gender: this.getGender(),
    locale: this.getLocale(),
    mobile: this.getMobile(),
    address: this.getAddress(),
    credits: this.getCredits(),
    country: this.getCountry(),
    grade: this.getGrade(),
    course_level_id: this.getCourseLevelId(),
    timezone: this.getTimezone(),
    is_active: this.getIsActive(),
    social_id: this.getSocialId(),
    login_type: this.getLoginType(),
    family_name: this.getFamilyName(),
    parent_name: this.getParentName(),
    parent_image: this.getParentImage(),
    email_verified: this.getEmailVerified(),
    mobile_verified: this.getMobileVerified()
  }
}

const createObject = json => {
  return fromJSON(json, User)
}

module.exports = define('userDomain', () => {
  return createObject
})
