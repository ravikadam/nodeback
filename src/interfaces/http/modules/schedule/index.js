// we have to get the DI
const { Router } = require('express')
const Status = require('http-status')
const container = require('src/container')

module.exports = () => {
  const router = Router()
  const {
    response: { Success },
    authorizeMiddleware
  } = container.cradle
  const {
    auth,
    getBookingService,
    bookingFacade,
    constants,
    userContextMiddleware
  } = container.cradle

  const { STUDENT_ROLE } = constants
  router.use(auth.authenticate())
  router.use(userContextMiddleware)

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Bookings
   *     description: Returns loggedin user Details
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: Logged In User
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', async (req, res, next) => {
    try {
      const { id, role } = req.user

      const { limit, status, date } = req.query

      const bookings = await getBookingService.getBookings({
        userId: id,
        userRole: role,
        limit,
        status,
        currentDate: date
      })
      res.status(Status.OK).json(Success(bookings))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  router.get('/latest', async (req, res, next) => {
    try {
      const {
        id,
        course: { id: courseId }
      } = req.user

      const latestTutor = await getBookingService.getTutorOfLastSession({
        userId: id,
        courseId
      })
      res.status(Status.OK).json(Success(latestTutor))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  router.post(
    '/cancel',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const {
          booking_id: bookingId,
          session_id: sessionId,
          slot_id: slotId,
          current_date: currentDate
        } = req.body

        const booking = await bookingFacade.cancelBooking({
          userId: id,
          courseId,
          sessionId,
          slotId,
          currentDate,
          bookingId,
          studentId: id
        })
        res.status(Status.OK).json(Success(booking))
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  router.post(
    '/',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const {
          tutor_id: tutorId,
          slot_id: slotId,
          booking_date: bookingDate,
          current_date: currentDate,
          session_master_id: sessionMasterId
        } = req.body

        const booking = await bookingFacade.createBooking({
          userId: id,
          courseId,
          tutorId,
          slotId,
          sessionMasterId,
          bookingDate,
          currentDate,
          studentId: id
        })
        res.status(Status.OK).json(Success(booking))
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  return router
}
