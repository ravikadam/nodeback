import { define } from '../../containerHelper'

module.exports = define('paymentService', ({ paymentRepository }) => {
  const getSubScriptionPackages = async type => {
    const packages = await paymentRepository.getSubScriptionPackages(type)
    return packages.getPackages()
  }

  return {
    getSubScriptionPackages
  }
})
