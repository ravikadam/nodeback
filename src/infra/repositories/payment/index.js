import { define } from '../../../containerHelper'

module.exports = define('paymentRepository', ({ database, paymentsDomain }) => {
  const toEntity = paymentsDomain
  const paymentMaster = database['package']
  const getSubScriptionPackages = type =>
    paymentMaster
      .findAll({
        where: {
          type: type
        }
      })
      .then(entity => {
        return toEntity({
          packages: entity
        })
      })

  const findPackageByCredit = credit =>
    paymentMaster.findAll({
      where: {
        credit: credit
      },
      attributes: ['id', 'name', 'amount', 'currency', 'credits']
    })

  return {
    getSubScriptionPackages,
    findPackageByCredit
  }
})
