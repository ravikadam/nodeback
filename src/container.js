import { createContainer, asFunction, asValue, Lifetime, asClass } from 'awilix'
import { scopePerRequest } from 'awilix-express'

import app from './app'
import server from './interfaces/http/server'
import router from './interfaces/http/router'
import auth from './interfaces/http/auth'
import config from '../config'
import logger from './infra/logging'
import database from './infra/database'
import redis from './infra/redis'
import jwt from './infra/jwt'
import email from './infra/email'
import sms from './infra/sms'
import sendGrid from './infra/sendgrid'
import response from './infra/support/response'
import date from './infra/support/date'
import constants from './constants'
import CustomError from './infra/error'
import transactionDecorator from './infra/transaction'
import sessionHook from './infra/hook'
import md5 from './infra/md5'

import slack from './infra/slack'

import loggerMiddleware from './interfaces/http/middlewares/http_logger'
import errorHandlerMiddleware from './interfaces/http/middlewares/error_handler'
import authorizeHandlerMiddleware from './interfaces/http/middlewares/authorize_handler'
import validatorMiddleware from './interfaces/http/middlewares/validators'
import userContextMiddleware from './interfaces/http/middlewares/usercontext_handler'

const container = createContainer()

// System
container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton()
  })
  .register({
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton()
  })
  .register({
    config: asValue(config),
    constants: asValue(constants)
  })

// Middlewares
container
  .register({
    loggerMiddleware: asFunction(loggerMiddleware).singleton()
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorHandlerMiddleware: asFunction(errorHandlerMiddleware),
    authorizeMiddleware: asFunction(authorizeHandlerMiddleware).singleton()
  })
  .register({
    validatorMiddleware: asFunction(validatorMiddleware).singleton(),
    userContextMiddleware: asFunction(userContextMiddleware).singleton()
  })

// Database
container.register({
  database: asFunction(database).singleton(),
  redisClient: asFunction(redis).singleton()
})

// Infra
container.register({
  auth: asFunction(auth).singleton(),
  jwt: asFunction(jwt).singleton(),
  response: asFunction(response).singleton(),
  date: asFunction(date).singleton(),
  emailInfra: asFunction(email).singleton(),
  smsInfra: asFunction(sms).singleton(),
  sendGridInfra: asFunction(sendGrid).singleton(),
  CustomError: asFunction(CustomError).singleton(),
  slackInfra: asFunction(slack).singleton(),
  md5: asFunction(md5).singleton(),
  transactionDecorator: asFunction(transactionDecorator).singleton(),
  sessionHook: asFunction(sessionHook).singleton()
})

// Domains
container.loadModules(['domain/**/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

// Repositories
container.loadModules(['infra/repositories/**/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

// App Services
container.loadModules(['app/**/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

// Facade Services
container.loadModules(['facade/**/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

module.exports = container
