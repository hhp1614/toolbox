import Vue from 'vue';
import Vuex from 'vuex';
import format from './modules/format';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: { format }
});
