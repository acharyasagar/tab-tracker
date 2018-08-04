const { Song } = require('../models')

module.exports = {
  async index(req, res) {
    if (req.query.search) {
      console.log('Query is: ', req.query)
      return
    }
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
      return
    } catch (err) {
      res.status(400).send({
        error: [' An error has occured while trying to fetch songs']
      })
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
      return
    } catch (err) {
      res.status(400).send({
        error: [' An error has occured while trying to fetch songs']
      })
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
      return
    } catch (err) {
      res.status(400).send({
        error: ['An error has occured while trying to create the song']
      })
    }
  },
  async edit(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
      return
    } catch (err) {
      res.status(400).send({
        error: ['An error has occured while trying to create the song']
      })
    }
  }
}

