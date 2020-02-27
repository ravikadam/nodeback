const { Router } = require('express')
const Status = require('http-status')
const container = require('src/container')
import { encryptPassword } from '../../../../infra/encryption'
import httpContext from 'express-cls-hooked'

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = container.cradle
  const {
    auth,
    config,
    userContextMiddleware,
    userFacade,
    getUserService,
    authorizeMiddleware,
    constants
  } = container.cradle

  const { ADMIN_ROLE, TRIAL_BOOKED_EVENT } = constants
  router.use(auth.authenticate())
  router.use(userContextMiddleware)
  router.get('/', async (req, res, next) => {
    try {
      const user = await getUserService.getUserInfo(req.user)
      //Another attempt for solving timezone issue
      if (user && user.id && !httpContext.get('currentuser'))
        httpContext.set('currentuser', user)

      res.status(Status.OK).json(
        Success({
          user: user,
          config: config.appConfig
        })
      )
    } catch (e) {
      next(e)
    }
  })
  router.get(
    '/:id',
    authorizeMiddleware([ADMIN_ROLE]),
    async (req, res, next) => {
      const userId = req.params.id
      const user = await getUserService.getUserById(userId)
      res.status(Status.OK).json(
        Success({
          user: user
        })
      )
    }
  )

  router.put('/:user', async (req, res, next) => {
    try {
      let user = req.body
      let userId = req.user.id
      if (user.password) {
        const hashedPw = await encryptPassword(user.password)
        user.password = hashedPw
      }

      user.parent_name = user.parentName //VINEET: What is the right way?
      switch (user.grade) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
          user.course_level_id = 'l1'
          break
        case '5':
        case '6':
          user.course_level_id = 'l2'
          break
        case '7':
        case '8':
        case '9':
          user.course_level_id = 'l3'
          break
        default:
          break
      }

      await userFacade.updateStudentProfile(userId, user)
      res.status(Status.OK).json(
        Success({
          user: req.user
        })
      )
    } catch (e) {
      next(e)
    }
  })

  return router
}
