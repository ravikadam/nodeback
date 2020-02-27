import { OK } from 'http-status'
import { Router } from 'express'

import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const { paymentFacade } = cradle

  /**
   * @swagger
   * /user:
   *   get:
   *     tags:
   *       - Packages
   *     description: Returns Packages and Process Payment flow
   *     responses:
   *       200:
   *         description: Payment Packages
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', async (req, res, next) => {
    try {
      let packages = await paymentFacade.getPackages(req.query)
      res.status(OK).json(
        Success({
          packages
        })
      )
    } catch (e) {
      // let middle ware handle the errors
      next(e)
    }
  })
  return router
}
