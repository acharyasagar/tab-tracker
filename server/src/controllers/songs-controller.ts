import express from 'express'
import { getRepository, Repository } from 'typeorm'
import entities from '../entities'

const { Song } = entities

export default class SongsController {
  public static async index(req: express.Request, res: express.Response) {
    const songRepo: Repository<any> = getRepository(Song)
    const { search } = req.query
    let songs: any[] = []
    const allSongs: any[] = await songRepo.find()

    // if no songs on database
    if (!allSongs.length) {
      return res.status(400).json({ err: ['No songs']})
    }

    // if request doesn't have any query respond all the songs in db
    if (!search) {
      songs = await songRepo.find({ take: 10 })
      return res.status(200).json(songs)
    }

    // if req have query respond with the songs matching the query
    songs =  allSongs.filter(song => {
      // save current search term as a regular expression
      const regex: RegExp = new RegExp(search, 'i')

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
    if (!songs.length) return res.status(400).json({ err: ['No songs']})
    return res.status(200).json(songs)
  }

  public static async post(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      const songRepo: Repository<any> = getRepository(Song)
      const song = await songRepo.save(req.body)
      return res.status(200).json({
        message: 'Successfully added song',
        song,
      })
    } catch (err) {
      // tslint:disable-next-line
      console.log(err)
      return res.status(400).json({
        err: ['Error saving the song to database'],
      })
    }
  }

  public static async show(req: express.Request, res: express.Response) {
    try {
      const songRepo: Repository<any> = getRepository(Song)
      const song = await songRepo.findOne(req.params.songId)
      return res.send(song)
    } catch (err) {
      res.status(400).send({
        error: [' An error has occured while trying to fetch song'],
      })
    }
  }

  public static async edit(req: express.Request, res: express.Response) {
    try {
      const songRepo: Repository<any> = getRepository(Song)
      let song = new Song()
      song = Object.assign(song, req.body)
      const savedSong = await songRepo.save(req.body)
      return res.send(savedSong)
    } catch (err) {
      res.status(400).send({
        error: ['An error has occured while trying to save the song'],
      })
    }
  }
}
