/* eslint-disable */
const
  express = require('express'),
  router = express.Router(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  authenticationController = require('../../controllers/authenticationController'),
  authenticationControllerPolicy = require('../../policies/AuthenticationControllerPolicy')

/* eslint-enable */
router.use(bodyParser.json())
router.use(cors())
router.route('/')
  .post(authenticationControllerPolicy.register, authenticationController.register)

module.exports = router
