<template>
  <PageLoader />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageLoader from './components/front/PageLoader.vue'

// Right Click Disabled
// window.addEventListener('contextmenu', function (e) { 
//   // do something here... 
//   e.preventDefault(); 
// }, false);
</script>

<style scoped>

</style>
