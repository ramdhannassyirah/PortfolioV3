<template>
  <div class="w-full border rounded-lg overflow-hidden shadow-md bg-white animate-pulse">
    <div class="w-full h-40 bg-gray-300"></div>
    <div class="p-4">
      <div class="h-5 bg-gray-300 rounded mb-2"></div>
      <div class="h-4 bg-gray-300 rounded mb-2 w-full"></div>
      <div class="h-3 bg-gray-300 rounded mb-2 w-full"></div>
      <div class="h-3 bg-gray-300 rounded w-5/6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSkeleton',
}
</script>

<style scoped>
.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
