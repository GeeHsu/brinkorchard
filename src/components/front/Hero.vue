<template>
  <div class="mb-5" :style="{ backgroundImage: `url(${imagePath})` }" style="height: 580px; background-position: bottom left; background-size: cover;">
    <div class="d-flex flex-column justify-content-center align-items-center h-100 text-white">
      <h2 class="display-4">堤岸果園</h2>
      <p class="fs-2">位於溪流堤岸旁的果園</p>
    </div>
  </div>
</template>

<script setup>
import imagePath from '@/assets/img/hero.jpg';
</script>

<style lang="scss" scoped>

</style>