/* eslint-disable */
const
  express = require('express'),
  router = express.Router(),
  cors = require('cors'),
  bodyParser = require('body-parser')

/* eslint-enable */
router.use(bodyParser.json())
router.use(cors())
router.route('/')
  .post((req, res) => {
    res.send(`hello ${req.body.email}, you are registered`)
  })

module.exports = router
