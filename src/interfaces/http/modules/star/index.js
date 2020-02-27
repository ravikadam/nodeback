import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const {
    getUserStarService,
    auth,
    authorizeMiddleware,
    constants,
    userContextMiddleware
  } = cradle
  const { STUDENT_ROLE } = constants

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
    authorizeMiddleware([STUDENT_ROLE]),
    async (req, res, next) => {
      try {
        const { id } = req.user

        const totalStars = await getUserStarService.getTotalStarForUser({
          userId: id
        })
        res.status(OK).json(
          Success({
            stars: totalStars || 0
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
