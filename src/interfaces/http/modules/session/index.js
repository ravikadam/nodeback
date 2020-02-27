import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const {
    auth,
    sessionFacade,
    authorizeMiddleware,
    constants,
    userContextMiddleware,
    getSessionService,
    getBookingService
  } = cradle
  const {
    STUDENT_ROLE,
    TUTOR_ROLE,
    ADMIN_ROLE,
    BOOKING_END,
    BOOKING_TECH_NOSHOW,
    BOOKING_NOSHOW
  } = constants

  router.use(auth.authenticate())
  router.use(userContextMiddleware)

  router.get(
    '/',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const sessionMaster = await sessionFacade.getAllSessionMaster({
          userId: id,
          courseId
        })

        res.status(OK).json(
          Success({
            sessions: sessionMaster
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  router.get(
    '/next',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const sessionMaster = await sessionFacade.getNextSessionToBeBooked({
          studentId: id,
          courseId
        })

        res.status(OK).json(
          Success({
            session: sessionMaster
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  router.get(
    '/start',
    authorizeMiddleware([STUDENT_ROLE, TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const sessions = await sessionFacade.startSession({
          bookingId: req.query.bookingId,
          userId: req.user.id
        })
        res.status(OK).json(
          Success({
            session: sessions || {}
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  router.get('/details/:id',
    authorizeMiddleware([ADMIN_ROLE]),
    async (req, res, next) => {
      const sessionId = req.params.id;
      const session = await getSessionService.getSessionById(sessionId)
      res.status(OK).json(
        Success({
          session: session
        })
      )
    })
  router.post(
    '/end',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const sessions = await sessionFacade.endSession({
          userId: req.user.id,
          ...req.body
        })
        res.status(OK).json(
          Success({
            session: sessions || {}
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  router.post(
    '/no-show',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const sessions = await sessionFacade.endSessionNoShow({
          userId: req.user.id,
          ...req.body
        })
        res.status(OK).json(
          Success({
            session: sessions || {}
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  router.post(
    '/no-show-tech',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const sessions = await sessionFacade.endSessionNoShowTech({
          userId: req.user.id,
          status: BOOKING_TECH_NOSHOW,
          ...req.body
        })
        res.status(OK).json(
          Success({
            session: sessions || {}
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  router.post(
    '/unresolved',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const sessions = await getBookingService.getUnResolvedBookings({
          userId: req.user.id,
          ...req.body
        })
        res.status(OK).json(
          Success({
            session: sessions || {}
          })
        )
      } catch (e) {
        next(e)
      }
    }
  )

  return router
}
