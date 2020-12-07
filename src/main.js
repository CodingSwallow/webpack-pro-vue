import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';
import App from './App.vue';
import element from '@/element/index';
import axios from '@/api/axios.js';
import VueAxios from 'vue-axios';

import { isNull } from '@/utils/index.js';

import 'element-ui/lib/theme-chalk/index.css';
import '@/element/element-variables.scss';
import './styles/common.scss';
import '@/assets/ali-icons/iconfont.css';

const root = document.createElement('div');
document.body.appendChild(root);

Vue.use(VueRouter);
Vue.use(element);
Vue.use(VueAxios, axios);

Vue.prototype.isNull = isNull;

import createRoute from './router/index.js';
let router = createRoute();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)