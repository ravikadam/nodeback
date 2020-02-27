import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const { userFacade } = cradle

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
  router.post('/', async (req, res, next) => {
    try {
      await userFacade.registerTutor(req.body)
      res.status(OK).json(Success('Successfully Registered!'))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })
  return router
}
