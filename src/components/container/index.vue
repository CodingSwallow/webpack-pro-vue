<template>
  <div class="container-outer">
    <sidebar></sidebar>
    <div class="container-inner">
      <page-header></page-header>
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from '@/components/footer/index.vue';
import pageHeader from '@/components/header/index.vue';
import sidebar from '@/components/sidebar/index.vue';
export default {
  name: 'container',
  components: {
    sidebar,
    pageHeader,
    pageFooter
  }
}
</script>