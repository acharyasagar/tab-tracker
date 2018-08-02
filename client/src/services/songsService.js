import api from '@/services/api'

export default {
  index () {
    return api().get('/songs')
  },
  post (song) {
    return api().post('/songs', song)
  },
  show (songId) {
    return api().get(`/songs/${songId}`)
  },
  put (songId, song) {
    return api().put(`/songs/${songId}`, song)
  }
}


