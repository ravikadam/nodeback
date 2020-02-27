import uidv4 from 'uuid/v4'

module.exports = userId => {
  return paymentMasters.map(paymentMaster => {
    return {
      id: uidv4(),
      name: paymentMaster.name,
      amount: paymentMaster.amount,
      credits: paymentMaster.credits,
      currency: paymentMaster.currency,
      is_active: paymentMaster.is_active,
      type: paymentMaster.type,
      created_by: userId,
      updated_by: userId,
      created_at: new Date(),
      updated_at: new Date()
    }
  })
}

const paymentMasters = [
  {
    name: 'BASIC',
    amount: 4999,
    credits: 8,
    currency: 'INR',
    is_active: true,
    type: 'subscription'
  },
  {
    name: 'STANDARD',
    amount: 10999,
    credits: 24,
    currency: 'INR',
    is_active: true,
    type: 'subscription'
  },
  {
    name: 'PREMIUM',
    amount: 19999,
    credits: 48,
    currency: 'INR',
    is_active: true,
    type: 'subscription'
  },
  {
    name: 'RENEWAL-ONE',
    amount: 6400,
    credits: 16,
    currency: 'INR',
    is_active: true,
    type: 'renew_subscription'
  },
  {
    name: 'RENEWAL-TWO',
    amount: 12800,
    credits: 32,
    currency: 'INR',
    is_active: true,
    type: 'renew_subscription'
  },
  {
    name: 'RENEWAL-THREE',
    amount: 16000,
    credits: 40,
    currency: 'INR',
    is_active: true,
    type: 'renew_subscription'
  },
  {
    name: 'RENEWAL-ZERO',
    amount: 3999,
    credits: 8,
    currency: 'INR',
    is_active: true,
    type: 'renew_subscription'
  }
]
