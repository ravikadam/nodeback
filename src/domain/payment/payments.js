import { struct, list, maybe } from 'tcomb'
import { compose } from 'ramda'
import { define } from '../../containerHelper'
import { cleanData } from '../helper'

module.exports = define('paymentsDomain', ({ paymentDomain }) => {
  const payments = struct({
    packages: maybe(list(paymentDomain))
  })

  payments.prototype.getData = function () {
    return { packages: this.packages.map(payment => payment.getData()) }
  }

  payments.prototype.getPackages = function () {
    return this.packages
  }

  return compose(
    cleanData,
    payments
  )
})
