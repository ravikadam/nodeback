/* eslint-env mocha */
import { repositories } from 'test/factory'

describe('Routes: POST Users', () => {
  const BASE_URI = `/api/${config.version}`

  const UserUseCase = repositories('userRepository')

  const signIn = app.resolve('jwt').signin()
  let token

  beforeEach(async () => {
    // we need to add user before we can request our token
    await UserUseCase.destroy({ where: {} })
    const user = await UserUseCase.create({
      name: 'Super Dev',
      mobile: '22323223',
      email: 'testdev1@gmail.com',
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

  describe('Should post users', () => {
    it('should return create user', (done) => {
      request.post(`${BASE_URI}/users`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'John',
          email: 'johndoe@mgail.com.com',
          mobile: '21212121',
          password: 'pass',
          role_id: 'student',
          created_by: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body.data.name).to.eql('John')
          expect(res.body.data.email).to.eql('johndoe@mgail.com.com')
          done(err)
        })
    })

    it('should validate user object is not complete', (done) => {
      request.post(`${BASE_URI}/users`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'John',
          mobile: '21212112'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          done(err)
        })
    })

    it('should return unauthorized if no token', (done) => {
      request.post(`${BASE_URI}/users`)
        .expect(401)
        .end((err, res) => {
          expect(res.text).to.equals('Unauthorized')
          done(err)
        })
    })
  })
})
