const dynamicPlugin = {
  formatRoutes: function (menus) {
    menus = menus || [];
    let routes = menus.map(menu => {
      var route = {
        name: menu.name,
        path: menu.path,
        component: (resolve) => {
          if (menu.component === 'Layout') {
            require([`@/components/container/layout.vue`], resolve)
          } else {
            require([`@/${menu.component}`], resolve)
          }
        },
        children: this.formatRoutes(menu.children)
      }
      return route;
    })
    return routes;
  },
  updateRoutes: function(menus) {

  }
}

export default dynamicPlugin;