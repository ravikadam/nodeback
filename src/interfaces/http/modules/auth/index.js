import { OK } from 'http-status'
import { Router } from 'express'
import passport from 'passport'

import { cradle } from 'src/container'
const { postTokenService, getUserService } = cradle
module.exports = () => {
  const router = Router()
  const {
    response: { Success }
  } = cradle
  const setToken = async (user, res) => {
    const token = await postTokenService.getTokenByUser(user)
    res.cookie('token', token.token, {
      httpOnly: false,
      secure: false,
      domain: 'purpletutor.com'
    })
  }

  router.get('/join/:secret', async (req, res) => {
    const { secret } = req.params
    const user = await getUserService.getBySecret(secret)
    await setToken(user, res)
    res.redirect(`${process.env.CLIENT_ENDPOINT}`)
  })

  const saveSocialId = async (id, type, res) => {
    const user = await getUserService.getBySocialId(id, type)
    await setToken(user, res)
    if (user && user.grade && user.grade != '0')
      res.redirect(`${process.env.CLIENT_ENDPOINT}`)
    else
      res.redirect(
        `${process.env.CLIENT_ENDPOINT}${process.env.SIGNUP_DETAIL_PATH}`
      )
  }

  router.get('/twitter', passport.authenticate('twitter'))
  router.get('/github', passport.authenticate('github'))
  router.get('/amazon', passport.authenticate('amazon'))
  router.get('/microsoft', passport.authenticate('microsoft'))
  router.get('/instagram', passport.authenticate('instagram'))
  router.get('/facebook', passport.authenticate('facebook'))
  router.get('/linkedin', passport.authenticate('linkedin'))
  router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )
  router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'facebook', res)
    }
  )

  router.get(
    '/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'twitter', res)
    }
  )

  router.get(
    '/amazon/callback',
    passport.authenticate('amazon', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'amazon', res)
    }
  )

  router.get(
    '/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'github', res)
    }
  )

  router.get(
    '/microsoft/callback',
    passport.authenticate('microsoft', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'twitter', res)
    }
  )

  router.get(
    '/instagram/callback',
    passport.authenticate('instagram', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'instagram', res)
    }
  )

  router.get(
    '/linkedin/callback',
    passport.authenticate('linkedin', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile.id, 'linkedin', res)
    }
  )

  router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    async (req, res) => {
      saveSocialId(req.user.profile._json.sub, 'google', res)
    }
  )

  return router
}
