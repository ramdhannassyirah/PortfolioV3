<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  name: String,
})
</script>
<template>
  <RouterLink class="btn py-2 px-4 text-sm box-border bg-purple-400 text-white rounded-full">{{
    name
  }}</RouterLink>
</template>
