<template>
  <Navbar />

  <div class="container pt-5 mb-5">
    <h2 class="text-center mb-4">我們的產品</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-lg-4">
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center py-4">
            <img class="img-fluid mb-3" src="/src/assets/img/avocado_icon.png" width="120" height="120" alt="avocado icon png">
            <h3 class="h4">酪梨</h3>
            <p class="text-dark-emphasis card-text lh-lg">營養豐富幸福降臨。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center py-4">
            <img class="img-fluid mb-3" src="/src/assets/img/mango_icon.png" width="120" height="120" alt="mango icon png">
            <h3 class="h4">芒果</h3>
            <p class="text-dark-emphasis card-text lh-lg">夏季專屬的美味。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center py-4">
            <img class="img-fluid mb-3" src="/src/assets/img/guava_icon.png" width="120" height="120" alt="guava icon png">
            <h3 class="h4">芭樂</h3>
            <p class="text-dark-emphasis card-text lh-lg">冬天專屬的味道。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center py-4">
            <img class="img-fluid mb-3" src="/src/assets/img/banana_icon.png" width="120" height="120" alt="banana icon png">
            <h3 class="h4">香蕉</h3>
            <p class="text-dark-emphasis card-text lh-lg">纖維豐富高營養價值。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <h2 class="text-center mb-4">保存&食用</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-6">
        <img class="img-fluid" src="/src/assets/img/avocado_tip.png" alt="avocado tip png">
      </div>
      <div class="col-md-6">
        <img class="img-fluid" src="/src/assets/img/mango_tip.png" alt="mango tip png">
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <h2 class="text-center mb-4">酪梨推薦吃法</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <img class="img-fluid" src="/src/assets/img/avocado_meal_01.png" alt="avocado meal 01 png">
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
  title: '堤岸果園 - 產品',
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