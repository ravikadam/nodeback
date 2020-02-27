import { define } from '../../../containerHelper'

module.exports = define('scheduleEmailRepository', ({
  database,
  scheduleEmailMetaDomain
}) => {
  const model = database['schedule_mails_meta']
  const toEntity = scheduleEmailMetaDomain

  const getByTypeAndUserId = (...args) =>
    model.findAll(...args).then(entity =>
      entity.map(data => {
        const { dataValues } = data
        return toEntity(dataValues)
      })
    )

  const create = (...args) =>
    model.create(...args).then(({ dataValues }) => toEntity(dataValues))

  const update = (data, clause) => model.update(data, clause)

  return {
    getByTypeAndUserId,
    create,
    update
  }
})
