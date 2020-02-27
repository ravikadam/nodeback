import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const { userFacade, config, postTokenService } = cradle

  router.post('/sendOTP', async (req, res, next) => {
    try {
      const mobile = req.body.mobile
      const isAdmin = req.body.isAdmin
      const user = await userFacade.registerStudentMobile(mobile, isAdmin)
      let sent = false
      if (user) sent = true

      res.status(OK).json(
        Success({
          sent: sent
        })
      )
    } catch (e) {
      next(e)
    }
  })

  /**
   * @swagger
   * /users:
   *   post:
   *     tags:
   *       - Users
   *     description: Create new user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's Entity
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/user'
   *     responses:
   *       200:
   *         description: Successfully Created
   *         schema:
   *           $ref: '#/definitions/user'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post('/signup', async (req, res, next) => {
    try {
      const user = await userFacade.verifyParentMobile(req.body)
      const token = await postTokenService.getTokenByUser(user)
      res.status(OK).json(Success(token))
    } catch (e) {
      next(e)
    }
  })

  return router
}
