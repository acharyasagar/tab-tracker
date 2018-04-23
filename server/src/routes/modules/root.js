/* eslint-disable */
const
  express = require('express'),
  router = express.Router()

/* eslint-enable */

router.route('/')
  .get((req, res) => {
    res.send('home')
  })

module.exports = router
