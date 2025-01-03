<template>
  <RouterLink
    :to="`/blog/${blog.slug.current}`"
    class="cursor-pointer hover:scale-95 transition-all duration-300 overflow-hidden"
  >
    <img
      :src="blog.imageUrl || 'https://via.placeholder.com/300x200'"
      :alt="blog.title || 'Blog Image'"
      class="w-[768px] h-60 rounded-lg object-cover object-top"
    />
    <div class="pt-1">
      <h1 class="text-md font-semibold text-gray-800">
        {{ blog.title || 'Untitled Blog' }}
      </h1>

      <p class="text-xs mt-1 text-gray-600 line-clamp-1">
        {{ formattedDate }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { formatDate } from '@/utils/dateFormat' // Sesuaikan path jika berbeda

// Props untuk menerima data blog dari komponen induk
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
})

// Format tanggal menggunakan fungsi formatDate
const formattedDate = formatDate(props.blog._createdAt)
</script>
