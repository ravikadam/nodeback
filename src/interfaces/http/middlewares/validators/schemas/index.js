import userSchemas from './user'

module.exports = {
  post: {
    '/students/': userSchemas.studentCreate,
    '/tutors/': userSchemas.tutorCreate,
    '/token/': userSchemas.login
  },
  put: {
    '/users/': userSchemas.update
  }
}
