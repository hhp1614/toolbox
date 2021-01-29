// 更新代码
const UPDATE_CODE = 'UPDATE_CODE';

export default {
  namespaced: true,
  state: {
    // 代码
    code: ''
  },
  mutations: {
    [UPDATE_CODE](state, code) {
      state.code = code;
    }
  },
  actions: {
    // action：更新代码
    acUpdateCode({ commit }, code) {
      commit(UPDATE_CODE, code);
    }
  }
};
