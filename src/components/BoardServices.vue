<script setup lang="ts">
import SkillCard from '@/components/common/Card/SkillCard.vue'

const skills = [
  {
    title: 'Laravel',
    level: 85,
    icon: 'simple-icons:laravel',
    color: 'bg-red-500',
  },
  {
    title: 'Vue.js',
    level: 80,
    icon: 'simple-icons:vuedotjs',
    color: 'bg-green-500',
  },
  {
    title: 'Tailwind CSS',
    level: 90,
    icon: 'simple-icons:tailwindcss',
    color: 'bg-sky-500',
  },
]
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <SkillCard v-for="skill in skills" :key="skill.title" v-bind="skill" />
  </div>
</template>
