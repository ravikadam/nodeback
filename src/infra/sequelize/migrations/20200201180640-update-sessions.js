'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'sessions',
          'tutor_comment',
          {
            type: Sequelize.STRING(1000),
            allowNull: true
          },
          { transaction: t }
        )
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('sessions', 'tutor_comment', {
          transaction: t
        })
      ])
    })
  }
}
