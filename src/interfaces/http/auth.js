import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import FacebookStrategy from 'passport-facebook'
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2'
import InstagramStrategy from 'passport-instagram'
import TwitterStrategy from 'passport-twitter-oauth2'
import { Strategy as MicrosoftStrategy } from 'passport-microsoft'
import AmazonStrategy from 'passport-amazon'
import GithubStrategy from 'passport-github'

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

  const twitterStrategy = new TwitterStrategy(
    {
      clientID: process.env.TWITTER_APP_ID,
      clientSecret: process.env.TWITTER_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.TWITTER_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'twitter', {
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
          loginType: 'twitter'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  const microsoftStrategy = new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_APP_ID,
      clientSecret: process.env.MICROSOFT_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.MICROSOFT_CALLBACK_PATH
      }`,
      scope: ['https://graph.microsoft.com/.default']
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'microsoft', {
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
          loginType: 'microsoft'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  const amazonStrategy = new AmazonStrategy(
    {
      clientID: process.env.AMAZON_APP_ID,
      clientSecret: process.env.AMAZON_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.AMAZON_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'amazon', {
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
          loginType: 'amazon'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  const githubStrategy = new GithubStrategy(
    {
      clientID: process.env.GITHUB_APP_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.GITHUB_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'github', {
        body: {
          socialId: profile.id,
          parentName: profile.displayName
            ? profile.displayName
            : profile.username,
          parentImage:
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : null,
          isActive: true,
          loginType: 'github'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  const instagramStrategy = new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_APP_ID,
      clientSecret: process.env.INSTAGRAM_APP_SECRET,
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.INSTAGRAM_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'instagram', {
        body: {
          socialId: profile.id,
          parentName: profile.displayName,
          familyName: profile.name ? profile.name.familyName : null,
          parentImage:
            profile._json &&
            profile._json.data &&
            profile._json.data.profile_picture
              ? profile._json.data.profile_picture
              : null,
          isActive: true,
          loginType: 'instagram'
        }
      })

      return done(null, {
        profile: profile,
        token: token
      })
    }
  )

  const linkedInStrategy = new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_APP_ID,
      clientSecret: process.env.LINKEDIN_APP_SECRET,
      scope: ['r_emailaddress', 'r_liteprofile'],
      callbackURL: `${process.env.APP_BASE_URL}${
        process.env.LINKEDIN_CALLBACK_PATH
      }`
    },
    async (token, refreshToken, profile, done) => {
      await createUserIfNotExists(profile.id, 'linkedin', {
        body: {
          socialId: profile.id,
          parentName: profile.displayName,
          familyName: profile.name ? profile.name.familyName : null,
          parentImage:
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : null,
          email:
            profile.emails && profile.emails.length > 0
              ? profile.emails[0].value
              : null,
          emailVerified:
            profile.emails &&
            profile.emails.length > 0 &&
            profile.emails[0].value
              ? true
              : false,
          isActive: true,
          loginType: 'linkedin'
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
  passport.use(linkedInStrategy)
  passport.use(instagramStrategy)
  passport.use(twitterStrategy)
  passport.use(microsoftStrategy)
  passport.use(amazonStrategy)
  passport.use(githubStrategy)

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
