// 更新编码前的数据
const UPDATE_BEFORE_CODING = 'UPDATE_BEFORE_CODING'
// 更新编码后的数据
const UPDATE_AFTER_CODING = 'UPDATE_AFTER_CODING'
// 更新全部编码
const UPDATE_ALL_CODING = 'UPDATE_ALL_CODING'
// 更新批量模式
const UPDATE_BATCH_MODE = 'UPDATE_BATCH_MODE'

export default {
  namespaced: true,
  state: {
    // 编码前的数据
    beforeCoding: 'https://hhp1614.com/test url/测试_URL',
    // 编码后的数据
    afterCoding: '',
    // 全部编码
    allCoding: false,
    // 批量模式
    batchMode: false
  },
  mutations: {
    [UPDATE_BEFORE_CODING](state, beforeCoding) {
      state.beforeCoding = beforeCoding
    },
    [UPDATE_AFTER_CODING](state, afterCoding) {
      state.afterCoding = afterCoding
    },
    [UPDATE_ALL_CODING](state) {
      state.allCoding = !state.allCoding
    },
    [UPDATE_BATCH_MODE](state) {
      state.batchMode = !state.batchMode
    }
  },
  actions: {
    // action：更新编码前的数据
    acUpdateBeforeCoding({ commit }, beforeCoding) {
      commit(UPDATE_BEFORE_CODING, beforeCoding)
    },
    // action：更新编码后的数据
    acUpdateAfterCoding({ commit }, afterCoding) {
      commit(UPDATE_AFTER_CODING, afterCoding)
    },
    // action：更新全部编码
    acUpdateAllCoding({ commit }) {
      commit(UPDATE_ALL_CODING)
    },
    // action：更新批量模式
    acUpdateBatchMode({ commit }) {
      commit(UPDATE_BATCH_MODE)
    }
  }
}
