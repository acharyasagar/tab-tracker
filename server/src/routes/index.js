/* eslint-disable */
const 
  root = require('./modules/root'),
  register = require('./modules/register')
/* eslint-enable */

module.exports = (app) => {
  app.use('/', root)
  app.use('/register', register)
}
