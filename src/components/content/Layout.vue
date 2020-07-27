<template>
  <div class="mdui-appbar-with-toolbar mdui-drawer-body-left">
    <!-- 应用栏 -->
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <button class="mdui-btn mdui-btn-icon mdui-ripple" @click="() => drawer.toggle()">
          <i class="mdui-icon material-icons">menu</i>
        </button>
        <router-link class="mdui-typo-headline" to="/">Toolbox</router-link>
        <span class="mdui-typo-title">工具箱</span>
        <div class="mdui-toolbar-spacer"></div>
        <button
          id="toggle-dark"
          class="mdui-btn mdui-btn-icon"
          @mouseenter="() => toggleDarkBtn.open({ content: tooltipContent })"
          @mouseleave="() => toggleDarkBtn.close()"
          @click="toggleDark"
        >
          <i class="mdui-icon material-icons">{{ dark ? 'brightness_4' : 'brightness_7' }}</i>
        </button>
        <button class="mdui-btn mdui-btn-icon" mdui-tooltip="{content: '关于'}">
          <i class="mdui-icon material-icons">info</i>
        </button>
      </div>
    </header>
    <!-- 导航栏 -->
    <div id="drawer" class="mdui-drawer mdui-shadow-6">
      <div id="collapse" class="mdui-list" mdui-collapse>
        <div
          class="mdui-collapse-item mdui-collapse-item-open"
          v-for="(item, index) in pages"
          :key="index"
          :class="'collapse-item-' + index"
        >
          <div
            class="mdui-collapse-item-header mdui-list-item mdui-ripple"
            @click.stop="() => collapse.toggle('.collapse-item-' + index)"
          >
            <i class="mdui-list-item-icon mdui-icon material-icons">{{ item.icon }}</i>
            <div class="mdui-list-item-content">{{ item.title }}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-collapse-item-body mdui-list">
            <router-link
              class="mdui-list-item mdui-ripple"
              aria-current-value="page"
              exact-active-class="mdui-list-item-active"
              v-for="(child, key) in item.children"
              :key="key"
              :to="`${item.type}/${child.type}`"
              exact
            >
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">{{ child.title }}</div>
                <div class="mdui-list-item-text">{{ child.subtitle }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="mdui-container-fluid mdui-typo mdui-p-x-5">
      <h1 v-html="titleHTML" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import mdui from 'mdui';
import { isEmptyObject } from '@hhp1614/utils/lib/common/type';
import { pages } from '../../router/pageRoutes';

/**
 * 布局组件
 */
export default {
  name: 'Layout',
  data() {
    return {
      // 导航配置
      pages,
      // 导航栏
      drawer: null,
      // 导航列表
      collapse: null,
      // 切换深色主题按钮
      toggleDarkBtn: null,
      // 标题
      titleHTML: ''
    };
  },
  computed: {
    ...mapState(['dark']),
    // 切换主题按钮的提示内容
    tooltipContent() {
      return this.dark ? '切换到浅色主题' : '切换到深色主题';
    }
  },
  watch: {
    // 根据路由切换标题
    $route({ meta }) {
      this.setTitle(meta);
    }
  },
  mounted() {
    this.setTitle(this.$route.meta);
    this.drawer = new mdui.Drawer('#drawer');
    this.collapse = new mdui.Collapse('#collapse');
    this.toggleDarkBtn = new mdui.Tooltip('#toggle-dark', { content: this.tooltipContent });
    this.setTheme();
  },
  methods: {
    ...mapActions(['acToggleDark']),
    // 切换深色主题
    toggleDark() {
      this['acToggleDark']().then(() => {
        this.toggleDarkBtn.close();
        this.toggleDarkBtn.open({ content: this.tooltipContent });
        this.setTheme();
      });
    },
    // 设置标题
    setTitle(meta) {
      this.titleHTML = isEmptyObject(meta) ? '' : ` ${meta.title} <small>${meta.subtitle ?? ''}</small>`;
    },
    // 设置主题
    setTheme() {
      const rc = this.dark ? 'light' : 'dark';
      const ac = this.dark ? 'dark' : 'light';
      mdui
        .$('body')
        .removeClass(`mdui-theme-layout-${rc}`)
        .addClass(`mdui-theme-layout-${ac}`);
    }
  }
};
</script>
