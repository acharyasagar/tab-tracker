import Vuex from 'vuex'
import Vue from  'vue'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    auth
  }
})