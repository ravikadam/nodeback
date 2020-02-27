/* eslint-env mocha */
import { repositories } from 'test/factory'

describe('Routes: GET Users', () => {
  const BASE_URI = `/api/${config.version}`

  const UserUseCase = repositories('userRepository')

  const signIn = app.resolve('jwt').signin()
  let token

  beforeEach(async () => {
    // we need to add user before we can request our token
    await UserUseCase.destroy({ where: {} })

    await UserUseCase.create({
      name: 'Super Dev',
      mobile: '22323223',
      email: 'testdev1@gmail.com',
      password: 'pass',
      role_id: 'student',
      created_by: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
    })
    const user = await UserUseCase.create({
      name: 'V2',
      mobile: '22323223',
      email: 'admin@purpletutor.com',
      password: 'pass',
      role_id: 'student',
      created_by: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
    })

    token = signIn({
      id: user.id,
      name: user.name,
      email: user.email
    })
  })

  describe('Should return users', () => {
    it('should return all users', done => {
      request
        .get(`${BASE_URI}/users`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.data).to.have.length(2)
          done(err)
        })
    })

    it('should return unauthorized if no token', done => {
      request
        .get(`${BASE_URI}/users`)
        .expect(401)
        .end((err, res) => {
          expect(res.text).to.equals('Unauthorized')
          done(err)
        })
    })
  })
})
