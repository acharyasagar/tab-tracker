import songsService from '@/services/songsService'

const state = {
  songs: null,
  song: null
}

const mutations = {
  UPDATE_SONG (state, payload){
    state.song =  payload
  },
  SONGS (state, payload){
    state.songs =  payload
  }
}

const actions = {
  async getSongs ({ commit }) {
    const payload = (await songsService.index()).data
    commit('SONGS', payload)
  },
  async getSongById({ commit }, songId) {
    const { data } = await songsService.show( songId )
    commit('UPDATE_SONG', data)
  },
  async editSong({ commit, dispatch }, payload) {
    const { songId, data } = payload
    songsService.edit(songId, data).then(response => {
      commit('UPDATE_SONG', JSON.parse(response.config.data))
      dispatch('getSongs')
    }) 
  } 
}

export default {
  state,
  mutations,
  actions
}
