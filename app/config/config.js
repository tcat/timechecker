var env = require('node-env-file');
var path = require('path')
env(path.resolve('./.env'));
const config = {}
config.redisStore = {
  url: process.env.REDIS_STORE_URI,
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  secret: process.env.REDIS_STORE_SECRET
}
config.env = process.env.NODE_ENV,
config.server = {
	port: process.env.NODE_SERVER_PORT
}

module.exports = config