'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('verification_token', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false
      },
      updated_by: {
        type: Sequelize.UUID,
        allowNull: false
      }
    }) /* .then(() => {
      console.log('created VerificationToken table')
      return queryInterface.sequelize.query(`
        CREATE EVENT expireToken
        ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL  1 DAY
        DO
        DELETE FROM verification_token WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 DAY);
        `)
    }).then(() => { console.log('expireToken event created') }) */
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('verification_token')
    /* .then(() => {
        console.log('VericationTokens table dropped')
        return queryInterface.sequelize.query(`DROP EVENT IF EXISTS  expireToken`)
      }).then(() => { console.log('expireToken event dropped') }) */
  }
}
