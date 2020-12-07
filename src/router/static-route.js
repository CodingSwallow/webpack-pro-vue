const staticRoutes = [
  {
    path: '/',
    component(resolve) {
      require([`@/views/home.vue`], resolve)
    },
  },
  {
    path: '*',
    component(resolve) {
      require([`@/views/404.vue`], resolve)
    },
  }
]

export default staticRoutes;