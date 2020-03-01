import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import FacebookStrategy from 'passport-facebook'


/**
 * middleware to check the if auth vaid
 */

module.exports = ({
  config,
  redisClient,
  jwt,
  postUserService,
  getUserService
}) => {
  const params = {
    secretOrKey: config.authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategy = new Strategy(params, (payload, done) => {
    redisClient
      .getKey(payload.tk)
      .then(user => {
        done(null, user)
      })
      .catch(error => done(error, null))
  })

  const createUserIfNotExists = async (id, type, userProfile) => {
    let dbUser = await getUserService.getBySocialId(id, type)
    if (!dbUser) await postUserService.create(userProfile)
  }

  const facebookStrategy = new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.FACEBOOK_CALLBACK_PATH
      }`,
      profileFields: ['id', 'displayName', 'photos', 'email', 'name', 'locale']
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'facebook', {
        body: {
          socialId: profile.id,
          parentName: profile.displayName,
          familyName: profile.name ? profile.name.familyName : null,
          parentImage:
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : null,
          email: profile.email,
          locale: profile.locale,
          emailVerified: profile.email ? true : false,
          isActive: true,
          loginType: 'facebook'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  
  const googleStrategy = new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.GOOGLE_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile._json.sub, 'google', {
        body: {
          socialId: profile._json.sub,
          parentName: profile._json.name,
          familyName: profile._json.family_name,
          parentImage: profile._json.picture,
          email: profile._json.email,
          locale: profile._json.locale,
          emailVerified: true,
          isActive: true,
          loginType: 'google'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  passport.use(strategy)
  passport.use(googleStrategy)
  passport.use(facebookStrategy)
  

  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    done(null, user)
  })

  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt')
    }
  }
}
