// 更新 url
const UPDATE_URL = 'UPDATE_URL';
// 更新 json 字符串
const UPDATE_JSON = 'UPDATE_RESULT';
// 更新是否使用 URL 编码
const UPDATE_URL_ENCODE = 'UPDATE_URL_ENCODE';

export default {
  namespaced: true,
  state: {
    // url
    url: '',
    // json 字符串
    json: '',
    // 是否使用 URL 编码
    urlEncode: true
  },
  mutations: {
    [UPDATE_URL](state, url) {
      state.url = url;
    },
    [UPDATE_JSON](state, json) {
      state.json = json;
    },
    [UPDATE_URL_ENCODE](state, urlEncode) {
      state.urlEncode = urlEncode;
    }
  },
  actions: {
    // action：更新 url
    acUpdateURL({ commit }, url) {
      commit(UPDATE_URL, url);
    },
    // action：更新 json 字符串
    acUpdateJson({ commit }, json) {
      commit(UPDATE_JSON, json);
    },
    // action：更新是否使用 URL 编码
    acUpdateUrlEncode({ commit }, urlEncode) {
      commit(UPDATE_URL_ENCODE, urlEncode);
    }
  }
};
