console.log(`
  _      _            __    __  __  _  _
 | |    | |          /_ |  / / /_ || || |
 | |__  | |__   _ __  | | / /_  | || || |_
 | '_ \\ | '_ \\ | '_ \\ | || '_ \\ | ||__   _|
 | | | || | | || |_) || || (_) || |   | |
 |_| |_||_| |_|| .__/ |_| \\___/ |_|   |_|
               | |
               |_|

Made with ❤️ by hhp1614

`)
import Vue from 'vue'
// MDUI
import mdui from 'mdui'
import 'mdui/dist/css/mdui.css'
// 剪贴板
import VueClipboard from 'vue-clipboard2'

import App from './App'
import router from './router'
import store from './store'
import mduiPlugin from './plugins/mduiPlugin'
import globalComponent from './plugins/globalComponent'
import globalFilters from './plugins/globalFilters'
import './scss/main.scss'

// 黑色主题
mdui.$('body').addClass('mdui-theme-primary-indigo mdui-theme-accent-indigo mdui-drawer-body-left')

// 绑定 mdui 全局方法，将 mdui 下的方法和类绑定到 Vue.prototype
// 写法：mdui.name => this.$name
Vue.use(mduiPlugin)

// 注册 components/content/global 目录下的组件为全局组件
Vue.use(globalComponent)

Vue.use(globalFilters)

// 代码编辑器
// Vue.use(VueCodemirror)

// 剪贴板
Vue.use(VueClipboard)

// 关闭生产环境提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
