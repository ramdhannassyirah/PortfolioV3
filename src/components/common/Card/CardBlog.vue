<template>
  <RouterLink
    :to="`/blog/${blog?.slug?.current}`"
    class="group block w-64 flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
  >
    <!-- IMAGE -->
    <div class="overflow-hidden rounded-xl bg-gray-100">
      <img
        :src="blog?.imageUrl || fallbackImage"
        :alt="blog?.title || 'Blog Image'"
        class="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- CONTENT -->
    <div class="pt-2 space-y-1">
      <h3 class="line-clamp-2 text-sm font-semibold text-gray-800">
        {{ blog?.title || 'Untitled Blog' }}
      </h3>

      <p class="text-xs text-gray-500">
        {{ formattedDate }}
      </p>
    </div>
  </RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { formatDate } from '@/utils/dateFormat'

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
})

const fallbackImage = 'https://via.placeholder.com/400x250?text=Blog'

const formattedDate = computed(() =>
  props.blog?._createdAt ? formatDate(props.blog._createdAt) : '',
)
</script>
