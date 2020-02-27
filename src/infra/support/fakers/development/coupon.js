import uidv4 from 'uuid/v4'

module.exports = (userId) => {
  return coupons.map(coupon => {
    return {
      id: uidv4(),
      code: coupon.code,
      description: coupon.description,
      type: coupon.type,
      value: coupon.value,
      max_amount: coupon.max_amount,
      expiry_date: coupon.expiry_date,
      created_by: userId,
      updated_by: userId,
      created_at: new Date(),
      updated_at: new Date()
    }
  })
}

const coupons = [
  {
    id: uidv4(),
    code: 'JEMBUT',
    description: 'Get 100 Rs Off',
    type: 'FIXED',
    value: 100,
    max_amount: 100,
    expiry_date: new Date()
  }, {
    id: uidv4(),
    code: 'JEMBUT',
    description: 'Get 100 Rs Off',
    type: 'PERCENT',
    value: 10,
    max_amount: 200,
    expiry_date: new Date()
  }
]
