import VueRouter from "vue-router";

import m1 from '@/views/module1/index.vue';
import m2r1 from '@/views/module2/m2-rank1/index.vue';
import m2r2 from '@/views/module2/m2-rank2/index.vue';

let routes = [
  {
    path: '/m1', component: m1
  },
  {
    path: '/m2/r1', component: m2r1
  },
  {
    path: '/m2/r2', component: m2r2
  }
]

export default () => {
  return new VueRouter({
    routes
  })
}