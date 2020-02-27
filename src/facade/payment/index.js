import { define } from '../../containerHelper'

module.exports = define('paymentFacade', ({ paymentService }) => {
  const getPackages = async args => {
    let { type } = args
    return paymentService.getSubScriptionPackages(type)
  }
  return {
    getPackages
  }
})
