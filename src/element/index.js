// 导入自己需要的组件
import { Button, Menu, MenuItem, MenuItemGroup, Submenu, Avatar } from 'element-ui';
const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(Avatar);
  }
}
export default element;