<template>
  <Navbar />
  <div class="container pt-5 mb-5">
    <h2 class="text-center mb-4">常見問題</h2>
    <h3 class="mb-3">酪梨篇</h3>
    <div class="accordion mb-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Q:不同的價位有何區別?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: 以品質、外觀、大小、重量來做價格分類。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Q: 如何判斷酪梨可以吃了嗎？
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: 摸起來開始變軟、手指按壓時會陷入不回彈，就代表可以食用囉（變色、不變色都適用的判斷方式）。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Q: 酪梨有什麼吃法？
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: 有幾種吃法，酪梨直接切塊吃、酪梨吐司、酪梨配蘋果、酪梨牛奶、酪梨蜂蜜牛奶、酪梨布丁牛奶…等。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
            Q: 為什麼酪梨會苦？
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: 有幾種可能，⒈採收時成熟度不夠、⒉後熟還不夠成熟、⒊加熱會產生苦味物質。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
            Q: 酪梨果肉有黑色纖維可能原因？
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            A: 有幾種可能，1.品種特性有關，變色品種會比較明顯、2.過度成熟、3.存放時間過久。
            在味道正常的情況下，因為會影響口感不好吃，可挑選出來之後在開始食用。
          </div>
        </div>
      </div>
    </div>
    <h3 class="mb-3">芒果篇</h3>
    <div class="accordion" id="accordionMango">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMangoOne" aria-expanded="true" aria-controls="collapseOne">
            Q: 如何判斷芒果可以吃了嗎？
          </button>
        </h2>
        <div id="collapseMangoOne" class="accordion-collapse collapse show" data-bs-parent="#accordionMango">
          <div class="accordion-body">
            A: 需常溫放置下(通風陰涼處)摸起來微軟後，才能食用、冰箱冷藏、以及切塊後冷凍保存。
          </div>
        </div>
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
  title: '堤岸果園 - 常見問題',
  meta: [
    {
      name: 'description',
      content: '位於溪流堤岸旁的果園，顧客對於酪梨、芒果的常見問題。'
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
  ogTitle: '堤岸果園 - 常見問題',
  ogDescription: '位於溪流堤岸旁的果園，顧客對於酪梨、芒果的常見問題。',
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