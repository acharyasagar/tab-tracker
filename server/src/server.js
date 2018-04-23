/*eslint-disable */
const 
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan'),
  app = express()
/* eslint-enable */

// Server Middlewares
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// test route
app.get('/test', (req, res) => {
  res.send({
    message: 'test'
  })
})

// Start the server
app.listen(process.env.PORT || 8081, () => console.log('Server started at port 8081'))
