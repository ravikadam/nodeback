import { Router } from 'express'
import { OK } from 'http-status'
import { cradle } from 'src/container' // we have to get the DI

module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const { userFacade, config, emailInfra, smsInfra, slackInfra } = cradle

  router.get('/', async (req, res, next) => {
    try {
      await emailInfra.SendEmail(req.query)
      if (req.query && req.query.sms_msg && req.query.mobile)
        await smsInfra.send(req.query.mobile, req.query.sms_msg)
      else await slackInfra.send(req.query, '#adhoctesting')

      res.status(OK).json(
        Success({
          sent: true
        })
      )
    } catch (e) {
      next(e)
    }
  })
  return router
}
