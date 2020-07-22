import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/addon/display/placeholder';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'codemirror/lib/codemirror.css';
import './scss/main.scss';

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
  vuetify,
  render: h => h(App)
}).$mount('#app');
