<template>
  <RouterLink
    to="/blog"
    class="max-w-52 cursor-pointer hover:scale-95 transition-all duration-300 overflow-hidden"
  >
    <img
      src="https://via.placeholder.com/300x200"
      alt="Placeholder Image"
      class="w-full h-24 rounded-lg object-cover"
    />
    <div class="pt-1">
      <h1 class="text-md font-semibold text-gray-800">My Blog</h1>
      <p class="mt-1 text-sm text-gray-600 line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus!
      </p>
      <p class="mt-1 text-xs text-gray-600 line-clamp-1">January 1, 2025</p>
    </div>
  </RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
