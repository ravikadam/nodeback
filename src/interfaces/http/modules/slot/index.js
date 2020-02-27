// we have to get the DI
const { Router } = require('express')
const Status = require('http-status')
const container = require('src/container')

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = container.cradle
  const {
    auth,
    slotFacade,
    authorizeMiddleware,
    constants,
    userContextMiddleware
  } = container.cradle
  const { TUTOR_ROLE, STUDENT_ROLE } = constants
  /**
   * @swagger
   * definitions:
   *   user:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       firstName:
   *         type: string
   *       lastName:
   *         type: string
   *       middleName:
   *         type: string
   *       email:
   *         type: string
   *       roleId:
   *         type: number
   *       isDeleted:
   *         type: number
   *       createdBy:
   *         type: string
   *         format: uuid
   */

  router.use(auth.authenticate())
  router.use(userContextMiddleware)

  /* router.use((req, res, next) => {
    // create a scoped container
    req.scope = container.createScope()
    // register some request-specific data..
    req.scope.register({
      currentUser: asValue(req.user)
    })
    next()
  }) */

  /**
   * @swagger
   * /user:
   *   get:
   *     tags:
   *       - Slot
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

  router.get('/', authorizeMiddleware([TUTOR_ROLE]), async (req, res, next) => {
    try {
      const {
        id,
        course: { id: courseId }
      } = req.user

      const { start_date: startDate, end_date: endDate } = req.query

      const slots = await slotFacade.getTutorSlots(req,{
        startDate,
        endDate,
        tutorId: id,
        courseId: courseId
      })
      res.status(Status.OK).json(
        Success({
          ...req.query,
          slots
        })
      )
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  /**
   * @swagger
   * /slots:
   *   get:
   *     tags:
   *       - Slot
   *     description: Returns slots by tutor
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: Logged In User
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/slot'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */

  router.get(
    '/tutor/:tutorId',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          course: { id: courseId }
        } = req.user

        const { tutorId } = req.params

        const { start_date: startDate, status } = req.query

        const slots = await slotFacade.getStudentPaidSlots({
          startDate,
          status,
          tutorId,
          courseId: courseId
        })
        res.status(Status.OK).json(
          Success({
            ...req.query,
            ...slots
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  /**
   * @swagger
   * /slots:
   *   get:
   *     tags:
   *       - Slot
   *     description: Returns slots by tutor
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: Logged In User
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/slot'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */

  router.get(
    '/student',
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const slots = await slotFacade.getStudentBookedSlots({
          studentId: id,
          courseId: courseId
        })
        res.status(Status.OK).json(
          Success({
            ...slots
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  /**
   * @swagger
   * /user:
   *   get:
   *     tags:
   *       - Slot
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
  router.get(
    '/dates',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const dateRange = await slotFacade.getDateRangeForTutorSlots({
          startDate: req.query.start_date,
          tutorId: id,
          courseId: courseId
        })
        res.status(Status.OK).json(
          Success({
            ...dateRange
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  /**
   * @swagger
   * /user:
   *   post:
   *     tags:
   *       - Slot
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
  router.post(
    '/',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const data = await slotFacade.saveTutorSlots(req.body, {
          tutorId: id,
          courseId: courseId
        })
        res.status(Status.OK).json(Success(data))
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )

  /**
   * @swagger
   * /user:
   *   Post:
   *     tags:
   *       - Slot
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
  router.post(
    '/copy',
    authorizeMiddleware([TUTOR_ROLE]),
    async (req, res, next) => {
      try {
        const {
          id,
          course: { id: courseId }
        } = req.user

        const dateRange = await slotFacade.copyTutorSlotFromLastWeek(
          { slots: req.body.slots },
          {
            currentDate: req.body.current_date,
            previousStartDate: req.body.start_date,
            previousEndDate: req.body.end_date,
            tutorId: id,
            courseId: courseId
          }
        )
        res.status(Status.OK).json(
          Success({
            ...dateRange
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  router.get('/slot/:slotId', async (req, res, next) => {
    try {
      const { slotId } = req.params
      const slot = await slotFacade.getSlotDetailsById(slotId)
      res.status(Status.OK).json(Success(slot))
    } catch (e) {
      next(e)
    }    
  })
  router.get('/trial', async (req, res, next) => {
    try {
      const slots = await slotFacade.getStudentTrialSlots({
        startDate: req.query.start_date,
        studentId: req.user.id
      })
      res.status(Status.OK).json(Success(slots))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })
  router.get('/trial/isScheduled', async (req, res, next) => {
    try {
      const isTrialScheduled = await slotFacade.isTrialScheduled(req.user.id)
      res.status(Status.OK).json(Success(isTrialScheduled))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  router.post('/adhocTrialBookingMail', async (req, res, next) => {
    await slotFacade.sendAdhocTrialBookingMail({
      tutorId: req.body.tutorId,
      studentId: req.body.studentId,
      slotDate: req.body.slotDate
    })
    res.status(Status.OK).json(Success({ done: true }))
  })

  router.post('/diwalidhamaka', async (req, res, next) => {
    await slotFacade.sendDiwaliDhamaka(req.body.emails)
    res.status(Status.OK).json(Success({ done: true }))
  })

  router.post('/trial/book', async (req, res, next) => {
    try {
      const bookingStatus = await slotFacade.bookTrialSlot({
        data: req.body,
        studentId: req.user.id
      })
      res.status(Status.OK).json(Success(bookingStatus))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  router.get('/availability', async (req, res, next) => {
    try {
      const {
        course: { id: courseId }
      } = req.user
      const { limit, start_date: startDate } = req.query
      const tutors = await slotFacade.getTutorsBasedOnAvailability({
        courseId,
        limit,
        startDate
      })
      res.status(Status.OK).json(Success(tutors))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })
  return router
}
