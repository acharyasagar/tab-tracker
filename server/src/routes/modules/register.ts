import express from 'express';
import authenticationController from '../../controllers/authenticationController';
import authenticationControllerPolicy from '../../policies/AuthenticationControllerPolicy';

const router: express.Router = express.Router();
router.route('/')
  .post(authenticationControllerPolicy.register, authenticationController.register);
export = router;
