import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const {
    getCreditService,
    auth,
    authorizeMiddleware,
    constants,
    userContextMiddleware
  } = cradle
  const { TUTOR_ROLE, STUDENT_ROLE } = constants
  router.use(auth.authenticate())
  router.use(userContextMiddleware)

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
    '/total',
    authorizeMiddleware([TUTOR_ROLE, STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const { id } = req.user

        const totalCredits = await getCreditService.getCredits({
          userId: id,
          isTrial: req.query.is_trial
        })
        res.status(OK).json(
          Success({
            credits: totalCredits || 0
          })
        )
      } catch (e) {
        // let middle ware handle the errors
        next(e)
      }
    }
  )
  return router
}
