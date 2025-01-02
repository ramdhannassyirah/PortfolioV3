<template>
  <div
    class="max-w-md border rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden shadow-md bg-white"
  >
    <img
      src="https://via.placeholder.com/300"
      class="w-full h-40 object-cover"
      alt="Project Thumbnail"
    />
    <div class="p-4">
      <h1 class="text-lg font-semibold text-gray-800">Website Development</h1>
      <p class="mt-2 text-sm text-gray-600">
        Create stunning, user-friendly fullstack web applications using modern technologies.
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  div {
    max-width: 32rem; /* Adjust for larger screens */
  }
}
</style>
