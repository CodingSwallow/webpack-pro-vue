<template>
  <div class="m1 m content-container">
    m1 
    <p>{{ msg }}</p>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'this is m1, hello'
    }
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/m-common.scss';
.m1 {
  p {
    font-size: 14px;
  }
}
</style>