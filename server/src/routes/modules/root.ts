import express from 'express';

const router: express.Router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('home');
  })

export = router;
