import httpContext from 'express-cls-hooked'

module.exports = () => {
  const hook = fn => (...args) => {
    let currentUser = httpContext.get('currentuser')
    currentUser = currentUser ? currentUser : { timezone: 'Asia/Calcutta' }
    const funcWithSession = fn(currentUser)
    return funcWithSession(...args)
  }

  return hook
}
