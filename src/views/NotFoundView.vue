<template>
  <Navbar />
  <div class="bg-primary mb-5">
    <div class="container d-flex justify-content-center align-items-center" style="height: 580px;">
      <div class="text-center">
        <h2 class="display-2 fw-bold">404頁面</h2>
        <p class="fs-4 mb-0">此頁面不存在。</p>
        <p class="display-4 mb-0"><i class="bi bi-exclamation-triangle"></i></p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '../components/front/Navbar.vue'
import Footer from '../components/front/Footer.vue'

import { useHead } from 'unhead'

useHead({
  htmlAttrs: {
    lang: 'zh-tw' // Change to your language
  },
  title: '堤岸果園 - 404頁面',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園'
    }
  ]
})
</script>

<style lang="scss" scoped>

</style>