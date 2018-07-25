import Vuex from 'vuex'
import Vue from  'vue'
import auth from './modules/auth'
import song from './modules/song'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    song
  }
})