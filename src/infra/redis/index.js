var Redis = require('ioredis')

module.exports = ({ config, logger }) => {
  if (!config.redisConfig) {
    /* eslint-disable no-console */
    logger.error('Redis config file log not found, disabling Redis.')
    /* eslint-enable no-console */
    return false
  }
  const client = new Redis({
    host: config.redisConfig.host,
    port: config.redisConfig.port
  })

  client.on('error', function (err) {
    logger.error('Error ' + err)
  })

  const setKey = (key, json) => {
    client.set(key, JSON.stringify(json))
  }

  const getKey = async (key) => {
    const res = await client.get(key)
    return JSON.parse(res)
  }

  return {
    setKey,
    getKey,
    authenticate: () => { return true } // TODO
  }
}
