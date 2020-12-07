<template>
  <div class="menu-con">
    <!-- menus -->
    <template v-for="item in list">
      <el-submenu v-if="item.children && item.children.length > 0" :key="item.id" :index="'' + item.id" >
        <template slot="title">
          <i :class="[item.icon]"></i>
          <span>{{ item.name }}</span>
        </template>
        <!-- menus -->
        <menu-item :base-path="item.path + '/'" :list="item.children"></menu-item>
      </el-submenu>
      <el-menu-item v-else :key="item.id" :index="'' + item.id" @click="navigatorTo(item.path)">
        <i :class="[item.icon]"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'menu-item',
  props: ['list', 'basePath'],
  watch: {
    list(newVal, oldVal) {

    },
    basePath(newVal, oldVal) {

    },
  },
  methods: {
    navigatorTo(url) {
      let realUrl = this.isNull(this.basePath) ? '' + url : this.basePath + url;
      this.$router.push({
        path: realUrl
      })
    }
  }
}
</script>

<style lang="scss">
.el-menu--collapse {
  .el-submenu__icon-arrow,
  .el-submenu__title > span {
    display: none;
  }
}
</style>