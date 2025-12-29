<script setup lang="ts">
import SkillMarquee from '@/components/common/Card/SkillCard.vue'

const skills = [
  { title: 'HTML', icon: 'simple-icons:html5' },
  { title: 'CSS', icon: 'simple-icons:css3' },
  { title: 'JavaScript', icon: 'simple-icons:javascript' },
  { title: 'PHP', icon: 'simple-icons:php' },
  { title: 'Laravel', icon: 'simple-icons:laravel' },
  { title: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { title: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
]
</script>

<template>
  <section class="space-y-4">
    <SkillMarquee :skills="skills" />
  </section>
</template>
