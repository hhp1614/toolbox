// 更新编码前的数据
const UPDATE_BEFORE_CODING = 'UPDATE_BEFORE_CODING';
// 更新编码后的数据
const UPDATE_AFTER_CODING = 'UPDATE_AFTER_CODING';
// 更新批量模式
const UPDATE_BATCH_MODE = 'UPDATE_BATCH_MODE';

export default {
  namespaced: true,
  state: {
    // 编码前的数据
    beforeCoding: '这是一段测试文本。\nThis is a test text.',
    // 编码后的数据
    afterCoding: '',
    // 批量模式
    batchMode: false
  },
  mutations: {
    [UPDATE_BEFORE_CODING](state, beforeCoding) {
      state.beforeCoding = beforeCoding;
    },
    [UPDATE_AFTER_CODING](state, afterCoding) {
      state.afterCoding = afterCoding;
    },
    [UPDATE_BATCH_MODE](state) {
      state.batchMode = !state.batchMode;
    }
  },
  actions: {
    // action：更新编码前的数据
    acUpdateBeforeCoding({ commit }, beforeCoding) {
      commit(UPDATE_BEFORE_CODING, beforeCoding);
    },
    // action：更新编码后的数据
    acUpdateAfterCoding({ commit }, afterCoding) {
      commit(UPDATE_AFTER_CODING, afterCoding);
    },
    // action：更新批量模式
    acUpdateBatchMode({ commit }) {
      commit(UPDATE_BATCH_MODE);
    }
  }
};
