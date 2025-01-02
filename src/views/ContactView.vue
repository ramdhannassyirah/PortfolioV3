<template>
  <div class="md:px-4">
    <h1 class="text-3xl font-semibold">Contact</h1>
    <p class="border-b-2 text-lg mb-4 py-4 text-gray-600">Let's connect</p>
    <section class="flex flex-col gap-4">
      <p>Find me on</p>
      <BoardContact />
    </section>
  </div>
</template>
<script setup>
import BoardContact from '@/components/BoardContact.vue'
</script>
