import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import './styles/common.scss';

const root = document.createElement('div');
document.body.appendChild(root);

Vue.use(VueRouter);

import createRoute from './router/index.js';
let router = createRoute();

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)