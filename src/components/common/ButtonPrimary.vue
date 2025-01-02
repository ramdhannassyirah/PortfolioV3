<script setup>
defineProps({
  name: String,
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <div>
    <button :type="type">{{ name }}</button>
  </div>
</template>
