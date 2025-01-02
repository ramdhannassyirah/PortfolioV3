<template>
  <header>
    <Navbar />
  </header>
  <main class="flex w-full gap-4">
    <SideBar class="hidden md:block" />
    <div class="px-4 pt-8 max-w-4xl mx-auto">
      <RouterView></RouterView>
    </div>
  </main>
</template>
<script setup>
import Navbar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import { RouterView } from 'vue-router'
</script>
