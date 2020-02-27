/* eslint-env mocha */
import { repositories } from 'test/factory'

describe('Routes: DELETE Users', () => {
  const BASE_URI = `/api/${config.version}`

  const UserUseCase = repositories('userRepository')

  const signIn = app.resolve('jwt').signin()
  let token
  let userId

  beforeEach(async () => {
    // Add user before requesting token
    await UserUseCase.destroy({ where: {} })
    const user = await UserUseCase.create({
      name: 'Super Dev',
      mobile: '22323223',
      email: 'testdev1@gmail.com',
      password: 'pass',
      role_id: 'student',
      created_by: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
    })
    userId = user.id
    token = signIn({
      id: user.id,
      name: user.name,
      email: user.email
    })
  })

  describe('Should DELETE users', () => {
    it('should delete user', done => {
      request
        .delete(`${BASE_URI}/users/${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.success).to.eql(true)

          done(err)
        })
    })

    it('should return unauthorized if no token', done => {
      request
        .delete(`${BASE_URI}/users/${userId}`)
        .expect(401)
        .end((err, res) => {
          expect(res.text).to.equals('Unauthorized')
          done(err)
        })
    })
  })
})
