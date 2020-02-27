import { define } from '../../../containerHelper'

module.exports = define('verificationRepository', ({ database, verificationDomain }) => {
  const model = database['verification_token']
  const toEntity = verificationDomain

  const getByToken = (...args) =>
    model.findAll(...args).then((entity) =>
      entity.map((data) => {
        const { dataValues } = data
        return toEntity(dataValues)
      })
    )

  const create = (...args) =>
    model.create(...args).then(({ dataValues }) => toEntity(dataValues))

  return {
    getByToken,
    create
  }
})
