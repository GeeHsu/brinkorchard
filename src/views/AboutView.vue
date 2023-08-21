<template>
  <Navbar />
  <div class="mb-5" :style="{ backgroundImage: `url(${imagePath})` }" style="height: 100vh; background-position: bottom left; background-size: cover;">
      <div class="d-flex flex-column justify-content-center align-items-center text-white h-100 text-center">
        <h2 class="display-4">關於</h2>
        <p class="fs-2">
          位於溪流堤岸旁的果園<br>
          結合地形特色命名
        </p>
      </div>
  </div>

  <div class="container mb-5">
    <h2 class="text-center mb-4">我們的樹</h2>
    <div class="row gy-4">
      <div class="col-lg-6">
        <h3 class="text-md-center mb-3">酪梨樹</h3>
        <img class="img-fluid border border-primary border-2" src="/src/assets/img/avocado_tree.jpg" alt="avocado tree jpg">
      </div>
      <div class="col-lg-6">
        <h3 class="text-md-center mb-3">芒果樹</h3>
        <img class="img-fluid border border-secondary border-2" src="/src/assets/img/mango_tree.jpg" alt="mango tree jpg">
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <h2 class="text-center mb-4">介紹</h2>
    <p class="text-center display-5 lh-base">
      自產自銷<br>
      小農經營<br>
      各有所好<br>
      歡迎選購
    </p>
  </div>

  <Footer />
</template>


<script setup>
import Navbar from '../components/front/Navbar.vue'
import Footer from '../components/front/Footer.vue'
import imagePath from '@/assets/img/hero.jpg'

import { useHead } from 'unhead'

useHead({
  htmlAttrs: {
    lang: 'zh-tw' // Change to your language
  },
  title: '堤岸果園 - 關於',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園'
    }
  ]
})
</script>

<style>

</style>
