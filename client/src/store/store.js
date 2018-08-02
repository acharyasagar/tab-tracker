import Vuex from 'vuex'
import Vue from  'vue'
import _auth from './modules/auth'
import _song from './modules/song'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    _auth,
    _song
  }
})