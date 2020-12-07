<template>
  <div :class="{'sidebar': true, 'sidebar-top-collapse': collapse}">
    <div class="sidebar-top">
      <!-- <i class="el-icon-s-opportunity systom-icon"></i> -->
      <span>{{ !collapse ? 'xxx管理系统' : 'xxx' }}</span>
      <i :class="['el-icon-d-arrow-' + (collapse ? 'right' : 'left'), 'collapse-icon']" @click="onOpenCollapse"></i>
    </div>
    <div class="menu-con">
      <template v-if="menuList && menuList.length > 0">
        <womi-menu :list="menuList" :collapse="collapse"></womi-menu>
      </template>
      <span v-else class="empty-menu">暂无任何菜单</span>
    </div>
  </div>
</template>

<script>
import { getMenu } from '@/api/user/index.js';
import WomiMenu from './menu.vue';
export default {
  name: 'sidebar',
  components: {
    WomiMenu
  },
  created() {
    this.$store.dispatch('GetMenus').then(() => {
      console.log('set menu success');
      this.menuList = this.$store.getters.menu;
    }).catch(err => {
      console.log('set menu fail', err);
    })
  },
  data() {
    return {
      menuList: [],
      collapse: false
    }
  },
  methods: {
    onOpenCollapse() {
      this.collapse = !this.collapse;
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-top {
  position: relative;
  padding: 10px;
  text-align: center;
  background: #cc0000;
  color: #fff;
  font-size: 18px;
  .collapse-icon {
    position: absolute;
    right: 5px;
    cursor: pointer;
    .sidebar-top-collapse & {
      right: -18px;
      top: 0;
      height: 41px;
      line-height: 41px;
      background: #cc0000;
    }
  }
}
</style>