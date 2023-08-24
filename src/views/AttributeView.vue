<template>
  <Navbar />
  <div class="container pt-5 mb-5">
    <ul>
      <li>
        <a href="https://www.flaticon.com/free-icons/guava" title="guava icons" target="_blank">Guava icons created by Namelix - Flaticon</a>
      </li>
      <li>
        <a href="https://www.iconfinder.com/search/icons?q=avocado&price=free" title="avocado icons" target="_blank">Avocado icons created by free icons - Iconfinder</a>
      </li>
      <li>
        <a href="https://www.iconfinder.com/search/icons?q=mango&price=free" title="mango icons" target="_blank">Mango icons created by free icons - Iconfinder</a>
      </li>
      <li>
        <a href="https://www.iconfinder.com/search/icons?q=banana&price=free" title="banana icons" target="_blank">Banana icons created by free icons - Iconfinder</a>
      </li>
    </ul>
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
  title: '堤岸果園 - 歸屬',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園，歸屬註明來源。'
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
  ogTitle: '歸屬',
  ogDescription: '歸屬註明來源。',
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