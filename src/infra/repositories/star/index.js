import { define } from '../../../containerHelper'

module.exports = define('userStarRepository', ({ database }) => {
  const userStartModel = database['user_star']

  const getTotalStarForUser = ({ userId }) =>
    userStartModel.sum('star', {
      where: {
        student_id: userId
      }
    })

  return {
    getTotalStarForUser
  }
})
