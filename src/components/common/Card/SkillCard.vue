<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Skill {
  title: string
  icon: string
}

defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="relative overflow-hidden space-y-4">
    <!-- Gradient Fade -->
    <div
      class="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"
    />
    <div
      class="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"
    />

    <!-- ROW 1 -->
    <div class="flex gap-6 animate-marquee-left">
      <div
        v-for="(skill, index) in [...skills, ...skills]"
        :key="'row1-' + index"
        class="skill-card"
      >
        <div class="icon-wrapper">
          <Icon :icon="skill.icon" size="22" />
        </div>
        <span class="skill-text">{{ skill.title }}</span>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="flex gap-6 animate-marquee-right">
      <div
        v-for="(skill, index) in [...skills, ...skills]"
        :key="'row2-' + index"
        class="skill-card"
      >
        <div class="icon-wrapper">
          <Icon :icon="skill.icon" size="22" />
        </div>
        <span class="skill-text">{{ skill.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CARD */
.skill-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  border: 1px solid #e5e7eb;
  background: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
  white-space: nowrap;
  transition: box-shadow 0.2s ease;
}

.skill-card:hover {
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}

.icon-wrapper {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 999rem;
  background: #f3f4f6;
}

.skill-text {
  font-weight: 500;
  color: #1f2937;
}

/* MARQUEE */
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee-left {
  width: max-content;
  animation: marquee-left 25s linear infinite;
}

.animate-marquee-right {
  width: max-content;
  animation: marquee-right 28s linear infinite;
}
</style>
