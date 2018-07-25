import songsService from '@/services/songsService'

const state = {
  song: null
}

const mutations = {
  UPDATE_SONG (state, payload){
    state.song = Object.assign({}, payload)
  }
}

const actions = {
  async getSongById({ commit }, songId) {
    const { data } = await songsService.show( songId )
    commit('UPDATE_SONG', data)
  }
}

export default {
  state,
  mutations,
  actions
}
