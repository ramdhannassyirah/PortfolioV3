<template>
  <header>
    <Navbar />
  </header>
  <main class="max-w-6xl mx-auto px-4 xl:px-0 pt-6">
    <RouterView></RouterView>
  </main>
</template>
<script setup>
import Navbar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>
