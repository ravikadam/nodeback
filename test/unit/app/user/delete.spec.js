
import { expect, use } from 'chai'
import { spy } from 'sinon'
import sinonChai from 'sinon-chai'

import deleteUsecase from 'src/app/user/delete'

use(sinonChai)

describe('App -> User -> Delete', () => {
  let useCase
  let method

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        update: () => {}
      }

      method = spy(MockRepository, 'update')
      useCase = deleteUsecase({
        userRepository: MockRepository
      })
    })

    it('should have called delete method of userRepository', async () => {
      await useCase.remove({ id: 1 })
      // eslint-disable-next-line
      expect(method).to.have.been.called
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        update: () => Promise.reject('Error')
      }

      useCase = deleteUsecase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.remove({ id: 1 })
      } catch (message) {
        error = message
      }
      expect(error).to.equal('Error')
    })
  })
})
