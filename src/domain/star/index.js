import { struct, maybe, String, Number } from 'tcomb'
import { define } from '../../containerHelper'

module.exports = define('userStarDomain', () => {
  const userStar = struct({
    id: maybe(String),
    student_id: String,
    tutor_id: String,
    session_id: String,
    star: Number
  })

  return userStar
})
