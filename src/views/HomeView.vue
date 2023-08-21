<template>
  <Navbar />
  <Hero />

  <div class="container mb-5">
    <h2 class="text-center mb-4">我們主要水果</h2>
    <div class="row justify-content-center row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="/src/assets/img/avocado_fruit.jpg" class="card-img-top" alt="avocado_fruit jpg">
          <div class="card-body">
            <h5 class="card-title">酪梨</h5>
            <p class="card-text">自然風味，味道清淡，口感柔滑，多種吃法。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/src/assets/img/mango_fruit.jpg" class="card-img-top" alt="mango_fruit jpg">
          <div class="card-body">
            <h5 class="card-title">芒果</h5>
            <p class="card-text">香氣自然，甜度剛好，口感滑順，好吃美味。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Map />

  <Footer />
</template>

<script setup>
import Navbar from '../components/front/Navbar.vue'
import Hero from '../components/front/Hero.vue'
import Map from '../components/front/Map.vue'
import Footer from '../components/front/Footer.vue'

import { useHead } from 'unhead'

useHead({
  htmlAttrs: {
    lang: 'zh-tw' // Change to your language
  },
  title: '堤岸果園 - 首頁',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園'
    },
    {
      name: 'keywords',
      content: '堤岸果園,酪梨,芒果,水果'
    }
  ]
})
</script>

<style lang="scss" scoped>

</style>