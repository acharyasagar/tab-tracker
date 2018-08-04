import api from '@/services/api'

export default {
  index (query) {
    return api().get(query)
  },
  post (song) {
    return api().post('/songs', song)
  },
  show (songId) {
    return api().get(`/songs/${songId}`)
  },
  edit (songId, song) {
    return api().put(`/songs/${songId}`, song)
  }
}


