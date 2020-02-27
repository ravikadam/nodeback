import {
  define
} from '../../../containerHelper'

module.exports = define('creditRepository', ({
  database
}) => {
  const creditModel = database.user_credit
  const {
    sequelize
  } = database
  const getTotalCredits = ({
      userId,
      isTrial
    }) =>
    creditModel
    .findOne({
      raw: true,
      attributes: [
        [
          sequelize.literal(
            'sum(case when is_credit = 0 then -1 * credit else credit end)'
          ),
          'totalCredits'
        ]
      ],
      where: {
        user_id: userId,
        is_trial: isTrial
      }
    })
    .then(({
      totalCredits
    }) => totalCredits)
  const assignCredit = (credit) => creditModel.create(credit)


  return {
    getTotalCredits,
    assignCredit
  }
})
