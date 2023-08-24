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

import { useHead, useSeoMeta } from 'unhead'

useHead({
  htmlAttrs: {
    lang: 'zh-tw' // Change to your language
  },
  title: '堤岸果園 - 404頁面',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園，此頁面不存在。'
    },
    {
      name: 'keywords',
      content: '堤岸果園,酪梨,芒果,水果,堤岸,果園'
    },
    {
      name: 'author',
      content: 'Gee Hsu'
    }
  ]
})

// the easiest meta tags
useSeoMeta({
  ogLocale: 'zh_TW',
  ogType: 'website',
  ogTitle: '堤岸果園 - 404頁面',
  ogDescription: '位於溪流堤岸旁的果園，此頁面不存在。',
  ogSite_name: '堤岸果園',
  ogUrl: 'https://geehsu.github.io/brinkorchard/',
  ogImage: 'https://geehsu.github.io/brinkorchard/assets/hero-bef45373.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '766',
  ogImageType: 'image/jpg',
  fbApp_id: '101917915461894',
  twitterCard: 'summary_large_image',
})
</script>

<style lang="scss" scoped>

</style>