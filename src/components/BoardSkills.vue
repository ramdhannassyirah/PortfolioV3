<script setup>
import CardSkills from './common/Card/CardSkills.vue'
</script>
<template>
  <div class="flex flex-wrap gap-4">
    <CardSkills v-for="item in 10" :key="item" />
  </div>
</template>
