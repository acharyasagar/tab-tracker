import api from '@/services/api'

export default {
  // Retrives the songs list for the given query
  index (search) {
    return api().get('/songs', {
      params: {
        search: search
      }
    })
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


