<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <div style="min-height: 100vh">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
