import Vue from 'vue';
import Vuex from 'vuex';
import { Local } from '@hhp1614/utils/lib/browser/storage';
import format from './modules/format';
import crypto from './modules/crypto';
import image from './modules/image';

Vue.use(Vuex);

// 切换深色主题
const TOGGLE_DARK = 'TOGGLE_DARK';
const UPDATE_NOTIFY = 'UPDATE_NOTIFY';

export default new Vuex.Store({
  namespaced: true,
  state: {
    // 是否设置深色主题
    dark: Local.get('dark') || false,
    // 通知
    notify: Local.get('notify') || {
      enable: false,
      text: '😘亲，下班了，该写周报啦~',
      week: [5],
      hour: 18,
      minute: 20,
      second: 0
    }
  },
  mutations: {
    [TOGGLE_DARK](state) {
      state.dark = !state.dark;
      Local.set('dark', state.dark);
    },
    [UPDATE_NOTIFY](state, notify) {
      state.notify = { ...state.notify, ...notify };
      Local.set('notify', state.notify);
    }
  },
  actions: {
    // action：切换深色主题
    acToggleDark({ commit }) {
      commit(TOGGLE_DARK);
    },
    // action: 更新通知设置
    acUpdateNotify({ commit }, notify) {
      commit(UPDATE_NOTIFY, notify);
    }
  },
  modules: { format, crypto, image }
});
