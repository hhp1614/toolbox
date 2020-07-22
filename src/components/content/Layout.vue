<template>
  <v-app>
    <!--应用栏-->
    <v-app-bar :class="textColor" :color="color" clipped-left app dense>
      <v-app-bar-nav-icon :class="textColor" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link :class="textColor" to="/">Toolbox 工具箱</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <!--导航栏-->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list v-model="currentPath" dense>
        <v-list-group v-for="(item, key) in pages" :key="key" :value="true" :prepend-icon="item.icon" no-action>
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(child, key) in item.children"
            :key="key"
            :to="`${item.type}/${child.type}`"
            exact
            two-line
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ child.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!--内容-->
    <v-main>
      <!--Tab 栏-->
      <v-tabs>
        <v-tab v-for="(item, index) in tabs" :key="index" :to="item.path" exact>
          {{ item.title }}
          <v-btn class="ml-1" @click.stop.prevent="closeTab(index)" icon x-small>
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-tab>
      </v-tabs>
      <slot />
    </v-main>

    <!--页脚-->
    <v-footer :class="textColor" :color="color" app>
      <div style="flex: 1;" class="text-center">
        <span>Made with ♥ </span>
        <a :class="textColor" href="https://github.com/hhp1614" target="_blank">hhp1614</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
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
      // 背景颜色
      color: 'indigo',
      // 文本颜色
      textColor: 'white--text',
      // 是否显示导航栏
      drawer: true,
      // 标签页
      tabs: []
    };
  },
  computed: {
    // 当前路径
    currentPath() {
      return this.$route.path;
    }
  },
  created() {
    // 将当前路径作为第一个 tab
    const { meta, path } = this.$route;
    this.tabs.push({ title: meta.title, path });
  },
  watch: {
    // 监听路由变化，如果路由路径在 tabs 中不存在就增加 tab
    $route({ meta, path }) {
      if (!this.tabs.find(i => i.path === path)) {
        this.tabs.push({ title: meta.title, path });
      }
    }
  },
  methods: {
    // 关闭 tab
    closeTab(index) {
      if (this.tabs.length > 1) {
        this.tabs.splice(index, 1);
        const target = this.tabs[index] ?? this.tabs[index - 1];
        this.$router.push(target.path);
      }
    }
  }
};
</script>
