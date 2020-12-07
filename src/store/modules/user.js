import { getMenu } from '@/api/user/index.js';
import Storage from '@/utils/storage.js';

const user = {
  state: {
    menu: Storage.get('menu_list', 'session') || []
  },
  actions: {
    // 获取菜单
    GetMenus({ commit }) {
      return new Promise(resolve => {
        getMenu().then(res => {
          console.log('res', res.data);
          let menus = res.data;
          //将menu转成router
          //将menu缓存store&storage
          commit('SET_MENU', menus);
          resolve(menus);
        })
      })
    }
  },
  mutations: {
    SET_MENU: (state, newMenuList) => {
      state.menu = newMenuList;
      Storage.set('menu_list', newMenuList, 'session');
    }
  }
}

export default user;