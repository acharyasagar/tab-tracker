import express from 'express';
import authenticationController from '../../controllers/authentication-controller';

const router: express.Router = express.Router();
router.route('/')
  .post(authenticationController.register);
export = router;
