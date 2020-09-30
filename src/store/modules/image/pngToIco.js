// 更新选择的文件
const UPDATE_FILE = 'UPDATE_FILE';
// 更新图标尺寸
const UPDATE_SIZE = 'UPDATE_SIZE';
// 更新图标形状
const UPDATE_SHAPE = 'UPDATE_SHAPE';
// 更新图标留白
const UPDATE_BLEED = 'UPDATE_BLEED';
// 更新图标 URL
const UPDATE_ICO_URL = 'UPDATE_ICO_URL';
// 更新图标名称
const UPDATE_ICO_NAME = 'UPDATE_ICO_NAME';

export default {
  namespaced: true,
  state: {
    // 选择的文件
    file: null,
    // 图标尺寸
    size: [16, 96, 256],
    // 图标形状
    shape: 'square',
    // 图标留白
    bleed: false,
    // 图标 URL
    icoUrl: '',
    // 图标名称
    icoName: ''
  },
  mutations: {
    [UPDATE_FILE](state, file) {
      state.file = file;
    },
    [UPDATE_SIZE](state, size) {
      state.size = size;
    },
    [UPDATE_SHAPE](state, shape) {
      state.shape = shape;
    },
    [UPDATE_BLEED](state, bleed) {
      state.bleed = bleed;
    },
    [UPDATE_ICO_URL](state, icoUrl) {
      state.icoUrl = icoUrl;
    },
    [UPDATE_ICO_NAME](state, icoName) {
      state.icoName = icoName;
    }
  },
  actions: {
    // action: 更新选择的文件
    acUpdateFile({ commit }, file) {
      if (file === null) {
        commit(UPDATE_ICO_URL, '');
        commit(UPDATE_ICO_NAME, '');
      }
      commit(UPDATE_FILE, file);
    },
    // action: 更新图标尺寸
    acUpdateSize({ commit }, size) {
      commit(UPDATE_SIZE, size);
    },
    // action: 更新图标形状
    acUpdateShape({ commit }, shape) {
      commit(UPDATE_SHAPE, shape);
    },
    // action: 更新图标留白
    acUpdateBleed({ commit }, bleed) {
      commit(UPDATE_BLEED, bleed);
    },
    // action: 更新图标 URL
    acUpdateIcoURL({ commit }, icoUrl) {
      commit(UPDATE_ICO_URL, icoUrl);
    },
    // action: 更新图标名称
    acUpdateIcoName({ commit }, icoName) {
      commit(UPDATE_ICO_NAME, icoName);
    }
  }
};
