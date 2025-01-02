<script setup>
import CardProjects from './common/Card/CardProjects.vue'
</script>
<template>
  <div class="grid md:grid-cols-2 gap-4 w-full">
    <CardProjects v-for="item in 10" :key="item" />
  </div>
</template>
