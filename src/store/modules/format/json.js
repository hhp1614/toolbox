// 增加存储的 json 数据
const ADD_TAB = 'ADD_TAB';
// 更新已选中标签
const UPDATE_ACTIVE_TAB_ID = 'UPDATE_ACTIVE_TAB_ID';
// 更新 json 数据
const UPDATE_TAB = 'UPDATE_TAB';
// 删除 json 数据
const DELETE_TAB = 'DELETE_TAB';
// 清空 json 数据
const CLEAR_TABS = 'CLEAR_TABS';

// 默认 tab
const defaultTab = { id: 0, name: 'Tab-0', json: '' };
// 默认 tabName
const defaultId = 0;

export default {
  namespaced: true,
  state: {
    // 存储所有的 json
    tabs: [{ ...defaultTab }],
    // 已选中标签
    activeId: defaultId
  },
  mutations: {
    [ADD_TAB](state, tab) {
      state.tabs.push(tab);
    },
    [UPDATE_ACTIVE_TAB_ID](state, id) {
      state.activeId = id;
    },
    [UPDATE_TAB](state, tab) {
      state.tabs = state.tabs.map(i => {
        if (i.id === tab.id) {
          i.json = tab.json;
        }
        return i;
      });
    },
    [DELETE_TAB](state, index) {
      state.tabs.splice(index, 1);
    },
    [CLEAR_TABS](state) {
      state.tabs = [{ ...defaultTab }];
      state.activeId = defaultId;
    }
  },
  actions: {
    // action - 增加存储的 json 数据
    acAddTab({ commit, state, dispatch }) {
      const { tabs } = state;
      const id = tabs[tabs.length - 1].id + 1;
      const name = `Tab-${id}`;
      commit(ADD_TAB, { id, name, json: '' });
      dispatch('acUpdateActiveTab', id);
    },
    // action - 更新已选中标签
    acUpdateActiveTab({ commit }, id) {
      commit(UPDATE_ACTIVE_TAB_ID, id);
    },
    // action - 更新 json 数据
    acUpdateTab({ commit }, tab) {
      commit(UPDATE_TAB, tab);
    },
    // action - 删除 json 数据
    acDeleteTab({ commit, state, dispatch }, index) {
      commit(DELETE_TAB, index);
      const isLast = state.tabs.length === index;
      console.log(state);
      dispatch('acUpdateActiveTab', isLast ? state.tabs[index - 1].id : state.tabs[index].id);
    },
    // action - 清空 json 数据
    acClearTabs({ commit, dispatch }) {
      commit(CLEAR_TABS);
      dispatch('acUpdateActiveTab', defaultId);
    }
  }
};
