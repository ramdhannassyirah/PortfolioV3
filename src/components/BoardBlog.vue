<template>
  <div class="flex container w-full gap-4 overflow-x-scroll">
    <CardBlog v-for="index in 6" class="flex-shrink-0" :key="index" />
  </div>
</template>
<script setup>
import CardBlog from './common/Card/CardBlog.vue'
</script>

<style>
.container {
  overflow: auto; /* Memungkinkan scroll */
  scrollbar-width: none; /* Untuk Firefox */
  -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
}

.container::-webkit-scrollbar {
  display: none; /* Untuk Chrome, Safari, dan Edge baru */
}
</style>
