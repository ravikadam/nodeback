import { comparePassword } from '../../encryption'
import { define } from '../../../containerHelper'

module.exports = define('userRepository', ({
  database,
  userDomain,
  constants,
  CustomError
}) => {
  const model = database['user']
  const verificationModel = database['verification_token']
  const studentCourseModel = database['student_course']
  const toEntity = userDomain
  const { EMAIL_ALREADY_EXIST } = constants

  const getAll = (...args) =>
    model.findAll(...args).then(entity =>
      entity.map(data => {
        const { dataValues } = data
        return toEntity(dataValues)
      })
    )

  const create = (...args) =>
    model
      .create(...args)
      .then(({ dataValues }) => toEntity(dataValues))
      .catch(e => {
        if (e.name === 'SequelizeValidationError') {
          throw new CustomError(
            EMAIL_ALREADY_EXIST.code,
            EMAIL_ALREADY_EXIST.status,
            e.message
          )
        }
        throw new Error(e)
      })

  const update = (...args) =>
    model.update(...args).catch(error => {
      console.log(error, 'test')
      throw new Error(error)
    })

  const getSecret = id =>
    model
      .findById(id)
      .then(({ dataValues }) => dataValues.secret)
      .catch(error => {
        throw new Error(error)
      })

  const findById = (...args) =>
    model
      .findById(...args)
      .then(({ dataValues }) => toEntity(dataValues))
      .catch(error => {
        throw new Error(error)
      })

  const findOne = (...args) =>
    model
      .findOne(...args)
      .then(data => {
        if (!data) return null
        const { dataValues } = data
        return toEntity(dataValues)
      })
      .catch(error => {
        throw new Error(error)
      })

  const validatePassword = endcodedPassword => password =>
    comparePassword(password, endcodedPassword)

  const destroy = (...args) => model.destroy(...args)

  return {
    getAll,
    create,
    update,
    findById,
    findOne,
    getSecret,
    validatePassword,
    destroy
  }
})
