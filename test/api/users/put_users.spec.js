/* eslint-env mocha */
import { repositories } from 'test/factory'

describe('Routes: PUT Users', () => {
  const BASE_URI = `/api/${config.version}`

  const UserUseCase = repositories('userRepository')

  const signIn = app.resolve('jwt').signin()
  let token
  let userId

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

    userId = user.id
    token = signIn({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      email: user.email
    })
  })

  describe('Should PUT users', () => {
    it('should update user', (done) => {
      request.put(`${BASE_URI}/users/${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'John',
          email: 'testdev1@gmail.com',
          password: 'pass',
          role_id: 'admin',
          mobile: '212121',
          createdBy: '48e40a9c-c5e9-4d63-9aba-b77cdf4ca67b'
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body.data.name).to.eql('John')
          expect(res.body.data.role_id).to.eql('admin')
          done(err)
        })
    })

    it('should validate user object is not complete', (done) => {
      request.put(`${BASE_URI}/users/${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'John'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          done(err)
        })
    })

    it('should return unauthorized if no token', (done) => {
      request.put(`${BASE_URI}/users/${userId}`)
        .expect(401)
        .end((err, res) => {
          expect(res.text).to.equals('Unauthorized')
          done(err)
        })
    })
  })
})
