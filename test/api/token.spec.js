/* eslint-env mocha */
import { repositories } from 'test/factory'

describe('Routes: Login', () => {
  const BASE_URI = `/api/${config.version}`

  const UserUseCase = repositories('userRepository')

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
  })

  describe('POST Token', () => {
    it('should retrieved token', done => {
      request.post(`${BASE_URI}/token`)
        .send({
          email: 'testdev1@gmail.com',
          password: 'pass'
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.include.keys('data')
          expect(res.body.data).to.include.keys('token')
          done(err)
        })
    })

    it('should throw error if email not existing', done => {
      request.post(`${BASE_URI}/token`)
        .send({
          email: 'testdev1234@gmail.com',
          password: 'pass'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          done(err)
        })
    })

    it('should throw error if password incorrect', done => {
      request.post(`${BASE_URI}/token`)
        .send({
          email: 'testdev1@gmail.com',
          password: 'pass123'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          expect(res.body.error).to.equal('Error: Invalid Credentials')
          done(err)
        })
    })
  })
})
