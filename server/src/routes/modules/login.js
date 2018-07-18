/* eslint-disable */
const
  express = require('express'),
  router = express.Router(),
  authenticationController = require('../../controllers/authenticationController')

/* eslint-enable */

router.route('/')
  .post(authenticationController.login)

module.exports = router
