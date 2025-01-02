<script setup>
import CardServices from './common/Card/CardServices.vue'
</script>
<template>
  <div class="grid md:grid-cols-2 gap-4 w-full">
    <CardServices v-for="item in 4" :key="item" />
  </div>
</template>
