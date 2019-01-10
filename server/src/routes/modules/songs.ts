import express from 'express'
import songsController from '../../controllers/songs-controller';

const   router = express.Router();

router.route('/')
  .get(songsController.index)
  .post(songsController.post)

router.route('/:songId')
  .get(songsController.show)
  .put(songsController.edit)

export = router;
