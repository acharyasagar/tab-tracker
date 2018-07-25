/* eslint-disable */
const
  express = require('express'),
  router = express.Router(),
  songsController = require('../../controllers/songsController')

/* eslint-enable */

router.route('/')
  .get(songsController.index)
  .post(songsController.post)

module.exports = router
