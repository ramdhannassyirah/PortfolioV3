<script setup>
import CardServices from './common/Card/CardServices.vue'

const services = [
  {
    title: 'Web Development',
    description:
      'Create stunning, user-friendly fullstack web applications using modern technologies.',
  },
  {
    title: 'UI Design',
    description: 'Design intuitive and visually appealing user interfaces for web applications.',
  },
]
</script>
<template>
  <div class="grid md:grid-cols-2 gap-4 w-full">
    <CardServices v-for="item in services" :key="item" :item="item" />
  </div>
</template>
