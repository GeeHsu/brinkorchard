<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm">
    <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <h1 class="logo mb-0 rounded-circle border border-1 border-secondary">堤岸果園</h1>
        </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">關於</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">產品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/questions">常見問題</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">聯絡</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>