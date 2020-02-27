import { OK } from 'http-status'
import { Router } from 'express'

import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const { postTokenService } = cradle

  /**
   * @swagger
   * /token:
   *   post:
   *     tags:
   *       - Authentication
   *     description: Authenticate
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's credentials
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/auth'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post('/login', async (req, res, next) => {
    try {
      const data = await postTokenService.validate({ body: req.body })
      res.status(OK).json(Success(data))
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })

  return router
}
