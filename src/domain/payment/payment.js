import { struct, maybe, String, Integer, refinement } from 'tcomb'
import { define } from '../../containerHelper'

const decimal = refinement(
  String,
  s => {
    // eslint-disable-next-line no-useless-escape
    const decimalRegex = /^(\d+\.?\d{0,9}|\.\d{1,9})$/gm
    return decimalRegex.test(s)
  },
  'decimal'
)

const payment = struct({
  id: maybe(String),
  name: maybe(String),
  amount: decimal,
  currency: maybe(String),
  credits: maybe(Integer)
})

payment.prototype.getData = function() {
  return {
    package_id: this.id,
    package_name: this.name,
    package_amount: this.amount,
    currency: this.currency,
    credits: this.credits
  }
}

module.exports = define('paymentDomain', () => {
  return payment
})
