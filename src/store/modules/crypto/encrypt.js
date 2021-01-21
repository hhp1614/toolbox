// 更新编码前的数据
const UPDATE_BEFORE_CODING = 'UPDATE_BEFORE_CODING'
// 更新编码后的数据
const UPDATE_AFTER_CODING = 'UPDATE_AFTER_CODING'
// 更新 mode
const UPDATE_MODE = 'UPDATE_MODE'
// 更新秘钥
const UPDATE_SECRET = 'UPDATE_SECRET'

export default {
  namespaced: true,
  state: {
    // 编码前的数据
    beforeCoding: '这是一段测试文本。This is a test text.',
    // 编码后的数据
    afterCoding: '',
    // 模式：AES
    mode: 'AES',
    // 秘钥
    secret: ''
  },
  mutations: {
    [UPDATE_BEFORE_CODING](state, beforeCoding) {
      state.beforeCoding = beforeCoding
    },
    [UPDATE_AFTER_CODING](state, afterCoding) {
      state.afterCoding = afterCoding
    },
    [UPDATE_MODE](state, mode) {
      state.mode = mode
    },
    [UPDATE_SECRET](state, secret) {
      state.secret = secret
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
    // action：更新 mode
    acUpdateMode({ commit }, mode) {
      commit(UPDATE_MODE, mode)
    },
    // action：更新秘钥
    acUpdateSecret({ commit }, secret) {
      commit(UPDATE_SECRET, secret)
    }
  }
}
