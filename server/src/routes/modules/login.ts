
import express from 'express';
import authenticationController from '../../controllers/authenticationController'

const router: express.Router = express.Router();

router.route('/')
  .post(authenticationController.login)

export = router;