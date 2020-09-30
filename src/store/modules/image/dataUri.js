// 更新选择的文件
const UPDATE_FILE = 'UPDATE_FILE';
// 更新图片转化的 Data URI
const UPDATE_DATA_URI = 'UPDATE_DATA_URI';
// 更新输入图片的 Data URI
const UPDATE_INPUT_URI = 'UPDATE_INPUT_URI';
// 更新输入 Data URI 转化的图片 URI
const UPDATE_IMG_URI = 'UPDATE_IMG_URI';

export default {
  namespaced: true,
  state: {
    // 选择的文件
    file: null,
    // 图片转化的 Data URI
    dataUri: '',
    // 输入图片的 Data URI
    inputUri: '',
    // 输入 Data URI 转化的图片 URI
    imgUri: ''
  },
  mutations: {
    [UPDATE_FILE](state, file) {
      state.file = file;
    },
    [UPDATE_DATA_URI](state, dataUri) {
      state.dataUri = dataUri;
    },
    [UPDATE_INPUT_URI](state, inputUri) {
      state.inputUri = inputUri;
    },
    [UPDATE_IMG_URI](state, imgUri) {
      state.imgUri = imgUri;
    }
  },
  actions: {
    // action: 更新选择的文件
    acUpdateFile({ commit }, file) {
      if (file === null) {
        commit(UPDATE_DATA_URI, '');
      }
      commit(UPDATE_FILE, file);
    },
    // action: 更新图片转化的 Data URI
    acUpdateDataUri({ commit }, dataUri) {
      commit(UPDATE_DATA_URI, dataUri);
    },
    // action: 更新输入图片的 Data URI
    acUpdateInputUri({ commit }, inputUri) {
      if (inputUri === '') {
        commit(UPDATE_IMG_URI, '');
      }
      commit(UPDATE_INPUT_URI, inputUri);
    },
    // action: 更新输入 Data URI 转化的图片 URI
    acUpdateImgUri({ commit }, inputUri) {
      commit(UPDATE_IMG_URI, inputUri);
    }
  }
};
