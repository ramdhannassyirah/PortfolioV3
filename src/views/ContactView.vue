<template>
  <div class="">

    <TextType :text="['Text typing effect', 'for your websites', 'Happy coding!']" :typingSpeed="75"
      :pauseDuration="1500" :showCursor="true" cursorCharacter="|" />
  </div>
</template>

<script setup lang="ts">
import TextType from '@/components/common/TextType.vue';
</script>