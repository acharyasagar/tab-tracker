/*eslint-disable */
const 
  express = require('express'),
  morgan = require('morgan'),
  app = express(),
  routes = require('./routes/index')
/* eslint-enable */

// Server Middlewares
app.use(morgan('combined'))

// routes
routes(app)

// Start the server
app.listen(process.env.PORT || 8081, () => console.log('Server started at port 8081'))
