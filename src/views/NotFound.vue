<template>
  <div class="flex justify-center items-center flex-col gap-4 h-screen w-full">
    <h1 class="text-gray-700 text-3xl">404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <RouterLink class="bg-gray-700 py-2 px-4 rounded-lg text-white font-semibold" to="/"
      >Go Back to Home</RouterLink
    >
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
