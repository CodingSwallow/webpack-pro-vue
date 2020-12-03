<template>
  <div class="m1 m">
    m1 
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'this is m1, hello'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/m-common.scss';
.m1 {
  background: lightblue;
  p {
    font-size: 14px;
  }
}
</style>