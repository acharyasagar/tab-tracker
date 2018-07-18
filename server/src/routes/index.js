/* eslint-disable */
const 
  cors = require('cors'),
  bodyParser = require('body-parser'),
  root = require('./modules/root'),
  register = require('./modules/register'),
  login = require('./modules/login')
/* eslint-enable */

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(cors())
  app.use('/', root)
  app.use('/register', register)
  app.use('/login', login)
}
