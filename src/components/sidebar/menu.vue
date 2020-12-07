<template>
  <div class="menu-con">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse">
      <menu-item :list="list" bath-path=""></menu-item>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from './menu-item.vue';
export default {
  name: 'womi-menu',
  props: ['list', 'collapse'],
  components: {
    MenuItem
  },
  watch: {
    list(newVal, oldVal) {

    },
    collapse(newVal, oldVal) {

    },
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>