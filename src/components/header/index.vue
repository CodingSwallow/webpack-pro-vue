<template>
  <header class="page-header">
    <div class="userinfo">
      <el-avatar :size="30" class="avatar">user</el-avatar>
      <span class="username">Admin</span>
      <el-button type="text" size="small" class="logout">退出</el-button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  height: 41px;
  border-bottom: 1px solid #e6e6e6;
  line-height: 41px;
  background: #fff;
  text-align: right;
  .userinfo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .avatar,
    .username,
    .logout {
      margin-right: 10px;
    }
  }
}
</style>