const { Song } = require('../models')

module.exports = {
  async index(req, res) {
    // abstract the search term from the request
    const { search } = req.query
    try {
      // Initialize a songs variable which will be populated and sent as a response
      let songs = null
      // if search contains something perform filteration
      if (search) {
        // Retrieve all songs array to perform filtration on them
        const allSongs = await Song.findAll({})

        // loop over the all songs to find the matching song to search term
        songs = allSongs.filter((song) => {
          // save current search term as a regular expression
          const regex = new RegExp(search, 'i')

          /*
            check on artist, title, genre, album properties of song and if
            it contains the
            provided search term in any of those properties return that
            */
          return Boolean(song.artist.match(regex) ||
            song.title.match(regex) ||
            song.genre.match(regex) ||
            song.album.match(regex))
        })
        res.send(songs)
      } else {
        songs = await Song.findAll({
          limit: 10
        })
        res.send(songs)
        return
      }
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

