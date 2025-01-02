<template>
  <header>
    <Navbar />
  </header>
  <main class="flex w-full gap-4">
    <SideBar class="hidden lg:block" />
    <div class="px-4 lg:px-0 py-8 max-w-3xl mx-auto">
      <RouterView></RouterView>
    </div>
  </main>
</template>
<script setup>
import Navbar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import { RouterView } from 'vue-router'
</script>
