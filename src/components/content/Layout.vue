<template>
  <div class="mdui-appbar-with-toolbar">
    <!-- 应用栏 -->
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-theme">
        <mdui-btn @click="() => drawer.toggle()" icon ripple>
          <mdui-icon type="menu" />
        </mdui-btn>
        <router-link class="mdui-typo-headline" to="/">Toolbox</router-link>
        <span class="mdui-typo-title">工具箱</span>
        <div class="mdui-toolbar-spacer"></div>
        <mdui-btn
          ref="toggleDark"
          @click="toggleDark"
          @mouseenter="() => toggleDarkBtn.open({ content: tooltipContent })"
          @mouseleave="() => toggleDarkBtn.close()"
          icon
        >
          <mdui-icon :type="dark ? 'brightness_4' : 'brightness_7'" />
        </mdui-btn>
        <mdui-btn
          mdui-tooltip="{content: '周报/日报提醒'}"
          mdui-dialog="{target: '#dialog-notify'}"
          icon
        >
          <mdui-icon type="notifications_paused" />
        </mdui-btn>
        <mdui-btn mdui-tooltip="{content: '关于'}" icon>
          <mdui-icon type="info" />
        </mdui-btn>
      </div>
    </header>
    <!-- 导航栏 -->
    <div ref="drawer" class="mdui-drawer mdui-shadow-6">
      <div ref="collapse" class="mdui-list" mdui-collapse>
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
            <i class="mdui-list-item-icon mdui-icon material-icons">{{
              item.icon
            }}</i>
            <div class="mdui-list-item-content">{{ item.title }}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons"
              >keyboard_arrow_down</i
            >
          </div>
          <div class="mdui-collapse-item-body mdui-list">
            <router-link
              class="mdui-list-item mdui-ripple"
              aria-current-value="page"
              exact-active-class="mdui-list-item-active"
              v-for="(child, key) in item.children"
              :key="key"
              :to="`/${item.type}/${child.type}`"
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

    <!-- 弹窗 -->
    <dialog-notify />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { isEmptyObject } from '@hhp1614/utils/lib/common/type'
import { pages } from '@/router/pageRoutes'
import DialogNotify from '@/components/content/dialogs/DialogNotify'

/**
 * 布局组件
 */
export default {
  name: 'Layout',
  components: { DialogNotify },
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
    }
  },
  computed: {
    ...mapState(['dark']),
    // 切换主题按钮的提示内容
    tooltipContent() {
      return this.dark ? '切换到浅色主题' : '切换到深色主题'
    }
  },
  watch: {
    // 根据路由切换标题
    $route({ meta }) {
      this.setTitle(meta)
    }
  },
  mounted() {
    this.drawer = new this.$Drawer(this.$refs.drawer)
    this.collapse = new this.$Collapse(this.$refs.collapse)
    this.toggleDarkBtn = new this.$Tooltip(this.$refs.toggleDark.$el, {
      content: this.tooltipContent
    })
    this.setTitle(this.$route.meta)
    this.setTheme()
  },
  methods: {
    ...mapActions(['acToggleDark']),
    // 切换深色主题
    toggleDark() {
      this.acToggleDark().then(() => {
        this.toggleDarkBtn.close()
        this.toggleDarkBtn.open({ content: this.tooltipContent })
        this.setTheme()
      })
    },
    // 设置标题
    setTitle(meta) {
      this.titleHTML = isEmptyObject(meta)
        ? ''
        : ` ${meta.title} <small>${meta.subtitle ?? ''}</small>`
    },
    // 设置主题
    setTheme() {
      const rc = this.dark ? 'light' : 'dark'
      const ac = this.dark ? 'dark' : 'light'
      this.$$('body')
        .removeClass(`mdui-theme-layout-${rc}`)
        .addClass(`mdui-theme-layout-${ac}`)
    }
  }
}
</script>
