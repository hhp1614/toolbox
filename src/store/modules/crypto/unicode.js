// 更新编码前的数据
const UPDATE_BEFORE_CODING = 'UPDATE_BEFORE_CODING'
// 更新编码后的数据
const UPDATE_AFTER_CODING = 'UPDATE_AFTER_CODING'
// 更新 HTML 实体编码、解码选项
const UPDATE_HTML_ENTITY = 'UPDATE_HTML_ENTITY'
// 更新 Unicode 编码、解码选项
const UPDATE_UNICODE = 'UPDATE_UNICODE'
// 更新 mode
const UPDATE_MODE = 'UPDATE_MODE'

export default {
  namespaced: true,
  state: {
    // 编码前的数据
    beforeCoding: '这是一段测试文本。\nThis © is a ≠ test 𝌆 text.',
    // 编码后的数据
    afterCoding: '',
    // HTML 实体编码、解码选项
    htmlEntity: {
      // 全部编码
      allCoding: false,
      // 编码使用十进制
      decimal: false,
      // 编码使用实体名称
      entity: false
    },
    // Unicode 编码、解码选项
    unicode: {
      // 全部编码
      allCoding: false
    },
    // 模式：htmlEntity、unicode
    mode: 'htmlEntity'
  },
  mutations: {
    [UPDATE_BEFORE_CODING](state, beforeCoding) {
      state.beforeCoding = beforeCoding
    },
    [UPDATE_AFTER_CODING](state, afterCoding) {
      state.afterCoding = afterCoding
    },
    [UPDATE_HTML_ENTITY](state, key) {
      state.htmlEntity[key] = !state.htmlEntity[key]
    },
    [UPDATE_UNICODE](state, key) {
      state.unicode[key] = !state.unicode[key]
    },
    [UPDATE_MODE](state, mode) {
      state.mode = mode
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
    // action：更新 HTML 实体编码、解码选项
    acUpdateHtmlEntity({ commit }, key) {
      commit(UPDATE_HTML_ENTITY, key)
    },
    // action：更新 Unicode 编码、解码选项
    acUpdateUnicode({ commit }, key) {
      commit(UPDATE_UNICODE, key)
    },
    // action：更新 mode
    acUpdateMode({ commit }, mode) {
      commit(UPDATE_MODE, mode)
    }
  }
}
