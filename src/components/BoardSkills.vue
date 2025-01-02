<script setup>
import CardSkills from './common/Card/CardSkills.vue'
</script>
<template>
  <div class="flex gap-4 flex-wrap">
    <CardSkills v-for="item in 10" :key="item" />
  </div>
</template>
