// 增加存储的 json 数据
const ADD_TAB = 'ADD_TAB';
// 更新已选中标签
const UPDATE_ACTIVE_TAB_NAME = 'UPDATE_ACTIVE_TAB_NAME';
// 更新 json 数据
const UPDATE_TAB = 'UPDATE_TAB';
// 删除 json 数据
const CLEAR_TABS = 'CLEAR_TABS';

// 默认 tab
const defaultTab = { name: 'tab-0', json: '' };
// 默认 tabName
const defaultActiveTabName = 'tab-0';

export default {
  namespaced: true,
  state: {
    // 存储所有的 json
    tabs: [{ ...defaultTab }],
    // 已选中标签
    activeTabName: defaultActiveTabName
  },
  mutations: {
    [ADD_TAB](state, tab) {
      state.tabs.push(tab);
    },
    [UPDATE_ACTIVE_TAB_NAME](state, activeTabName) {
      state.activeTabName = activeTabName;
    },
    [UPDATE_TAB](state, tab) {
      state.tabs.forEach(i => {
        if (i.name === tab.name) {
          i.json = tab.json;
        }
      });
    },
    [CLEAR_TABS](state) {
      state.tabs = [{ ...defaultTab }];
      state.activeTabName = defaultActiveTabName;
    }
  },
  actions: {
    // action - 增加存储的 json 数据
    acAddTab({ commit, state, dispatch }) {
      const name = `tab-${state.tabs.length}`;
      commit(ADD_TAB, { name, json: '' });
      dispatch('acUpdateActiveTab', name);
    },
    // action - 更新已选中标签
    acUpdateActiveTab({ commit }, activeTabName) {
      commit(UPDATE_ACTIVE_TAB_NAME, activeTabName);
    },
    // action - 更新 json 数据
    acUpdateTab({ commit }, tab) {
      commit(UPDATE_TAB, tab);
    },
    // action - 清空 json 数据
    acClearTabs({ commit, dispatch }) {
      commit(CLEAR_TABS);
      dispatch('acUpdateActiveTab', defaultActiveTabName);
    }
  }
};
