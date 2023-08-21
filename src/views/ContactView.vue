<template>
  <Navbar />
  <Map class="pt-5" />
  <div class="container mb-5">
    <h2 class="text-center mb-4">聯絡</h2>
    <div class="row gy-4 justify-content-center">
      <div class="col-2">
        <p class="mb-0 text-center">
          <a class="display-4 link-info" href="https://m.me/101917915461894" target="_blank">
            <i class="bi bi-messenger"></i>
          </a>
        </p>
      </div>
      <div class="col-2">
        <p class="mb-0 text-center">
          <a class="display-4 link-success" href="https://line.me/ti/g2/5G9GJZxdhw9eL7AQ7dBoONyyHkbmJDwQ_lmP4w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank">
            <i class="bi bi-line"></i>
          </a>
        </p>
      </div>
      <div class="col-2">
        <p class="mb-0 text-center">
          <a class="display-4 link-secondary" href="https://instagram.com/brink_orchard?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
  
  <Footer />
</template>

<script setup>
import Navbar from '../components/front/Navbar.vue'
import Map from '../components/front/Map.vue'
import Footer from '../components/front/Footer.vue'

import { useHead } from 'unhead'

useHead({
  htmlAttrs: {
    lang: 'zh-tw' // Change to your language
  },
  title: '堤岸果園 - 聯絡',
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