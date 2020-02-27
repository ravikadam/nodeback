import statusMonitor from 'express-status-monitor'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import compression from 'compression'

import { Router } from 'express'

import controller from './utils/create_controller'
import httpContext from 'express-cls-hooked'

module.exports = ({
  config,
  containerMiddleware,
  logger,
  database,
  loggerMiddleware,
  errorHandlerMiddleware,
  validatorMiddleware
}) => {
  const router = Router()

  /* istanbul ignore if */
  if (config.env === 'development') {
    router.use(statusMonitor())
  }

  /* istanbul ignore if */
  if (config.env !== 'test') {
    router.use(loggerMiddleware)
  }
  const apiRouter = Router()

  apiRouter
    .use(
      cors({
        origin: [config.clientEndPoint],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
    .use(
      urlencoded({
        extended: true
      })
    )
    .use(json())
    .use(compression())
    .use(httpContext.middleware)
    .use(containerMiddleware)

  apiRouter.use(validatorMiddleware())
  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */

  apiRouter.use('/', controller('index'))
  apiRouter.use('/token', controller('token'))
  apiRouter.use('/user', controller('user/user'))
  apiRouter.use('/students', controller('register/student'))
  apiRouter.use('/tutors', controller('register/tutor'))
  apiRouter.use('/user/:user_id/slots', controller('slot'))
  apiRouter.use('/user/:user_id/bookings', controller('schedule'))
  apiRouter.use('/user/:user_id/credits', controller('credit'))
  apiRouter.use('/user/:user_id/session', controller('session'))
  apiRouter.use('/user/:user_id/star', controller('star'))
  apiRouter.use('/payment', controller('payment'))
  apiRouter.use('/auth', controller('auth'))
  apiRouter.use('/email', controller('communication'))

  //For admins    
  apiRouter.use('/session', controller('session'))

  
  router.use(`/api/${config.version}`, apiRouter)

  router.use(errorHandlerMiddleware)

  return router
}
