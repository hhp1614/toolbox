import Vue from 'vue'
import Vuex from 'vuex'
import { Local } from '@hhp1614/utils/lib/browser/storage'
import format from './modules/format'
import crypto from './modules/crypto'
import image from './modules/image'

Vue.use(Vuex)

// 切换深色主题
const TOGGLE_DARK = 'TOGGLE_DARK'

export default new Vuex.Store({
  namespaced: true,
  state: {
    // 是否设置深色主题
    dark: Local.get('dark') || false
  },
  mutations: {
    [TOGGLE_DARK](state) {
      state.dark = !state.dark
      Local.set('dark', state.dark)
    }
  },
  actions: {
    // action：切换深色主题
    acToggleDark({ commit }) {
      commit(TOGGLE_DARK)
    }
  },
  modules: { format, crypto, image }
})
