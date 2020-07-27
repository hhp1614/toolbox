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

`);
import Vue from 'vue';
import mdui from 'mdui';
import VueClipboard from 'vue-clipboard2';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/addon/display/placeholder';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mdui/dist/css/mdui.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './scss/main.scss';

// 黑色主题
// mdui.$('body').addClass('mdui-theme-layout-auto');
mdui.$('body').addClass('mdui-theme-primary-indigo mdui-theme-accent-pink');
window.aaa = true;
// 剪贴板
Vue.use(VueClipboard);
// 代码编辑器
Vue.use(VueCodemirror, {
  options: {
    tabSize: 2,
    lineNumbers: true,
    lineWrapping: true
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
