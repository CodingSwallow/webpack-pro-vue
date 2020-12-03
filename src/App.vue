<template>
  <div id="app">
    <router-link to="/m1">module1</router-link>
    <router-link to="/m2/r1">module2 rank1</router-link>
    <router-link to="/m2/r2">module2 rank2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      
    }
  }
}
</script>