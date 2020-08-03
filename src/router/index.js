import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import { pageRoutes } from './pageRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  ...pageRoutes
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
