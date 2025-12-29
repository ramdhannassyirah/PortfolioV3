<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="px-4 xl:px-0 py-8 max-w-6xl overflow-hidden mx-auto">
      <RouterView></RouterView>
    </div>
  </main>
</template>
<script setup>
import Navbar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>
