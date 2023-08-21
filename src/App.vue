<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

// Right Click Disabled
window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);
</script>

<style scoped>

</style>
