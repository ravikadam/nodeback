module.exports = ({ CustomError, constants: { UNAUTHORIZED_REQUEST } }) => (roles = []) => { // eslint-disable-line no-unused-vars
  // const { logger, config } = req.container.cradle

  if (typeof roles === 'string') {
    roles = [roles]
  }
  return async (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      throw new CustomError(UNAUTHORIZED_REQUEST.code, UNAUTHORIZED_REQUEST.status)
    }
    next()
  }
}
