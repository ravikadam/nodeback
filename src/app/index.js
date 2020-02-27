
/**
 * We want to start here so we can manage other infrastructure
 * database
 * memcache
 * express server
 */
module.exports = ({ server, database, redisClient }) => {
  return {
    start: () =>
      Promise
        .resolve()
        .then(database.authenticate)
        // .then(redisClient.authenticate)
        .then(server.start)
  }
}
