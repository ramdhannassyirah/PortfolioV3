<template>
  <div
    class="max-w-md border rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden shadow-md bg-white"
  >
    <img :src="image" class="w-full h-40 object-cover object-top" alt="Project Thumbnail" />
    <div class="p-4">
      <h1 class="text-lg font-semibold text-gray-800">{{ title }}</h1>
      <p class="text-xs mt-1 text-gray-600">{{ technologies.join('  ') }}</p>
      <p class="mt-2 text-sm text-gray-600 line-clamp-4">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  technologies: Array,
})
</script>

<style scoped>
@media (min-width: 640px) {
  div {
    max-width: 32rem; /* Adjust for larger screens */
  }
}
</style>
