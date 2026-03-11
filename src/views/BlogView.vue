<template>
  <div class="flex items-center justify-center h-screen bg-black text-white text-2xl md:text-4xl font-noto-serif">

    <TextType :text="[
      'Website Under Development',
      'Currently Building Something Awesome',
      'Launching Soon 🚀'
    ]" :typingSpeed="75" :pauseDuration="1500" :showCursor="true" cursorCharacter="|" />

  </div>
</template>

<script setup lang="ts">
import TextType from '@/components/common/TextType.vue'
</script>