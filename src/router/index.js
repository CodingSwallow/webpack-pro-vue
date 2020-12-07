import VueRouter from "vue-router";
import staticRoutes from './static-route.js';
import dynamicPlugin from './dynamic-route.js';
import store from '@/store/index.js';

let dynamicRoutes = dynamicPlugin.formatRoutes(store.getters.menu);

let routes = [...dynamicRoutes, ...staticRoutes];

export default () => {
  return new VueRouter({
    mode: 'history',
    routes
  })
}