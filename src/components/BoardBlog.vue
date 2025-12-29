<template>
  <div class="relative w-full">
    <!-- SKELETON -->
    <div v-if="loading" class="flex h-44 w-full gap-4 overflow-x-hidden">
      <div
        v-for="n in skeletonCount"
        :key="n"
        class="flex-shrink-0 w-64 animate-pulse rounded-xl bg-white p-3"
      >
        <div class="h-28 w-full rounded-lg bg-gray-200"></div>
        <div class="mt-3 h-4 w-3/4 rounded bg-gray-200"></div>
        <div class="mt-2 h-3 w-1/2 rounded bg-gray-200"></div>
      </div>
    </div>

    <!-- EMPTY STATE -->
    <div v-else-if="blogs.length === 0" class="flex h-44 items-center justify-center text-gray-500">
      No blog available
    </div>

    <!-- BLOG LIST -->
    <div
      v-else
      class="flex h-46 w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
    >
      <CardBlog
        v-for="item in blogs"
        :key="item._id"
        :blog="item"
        class="mt-2 flex-shrink-0 snap-start"
      />
    </div>
  </div>
</template>
<script setup>
import CardBlog from './common/Card/CardBlog.vue'
import { ref, onMounted, computed } from 'vue'
import sanityClient from '../sanityClient.js'

const loading = ref(true)
const blogs = ref([])

// Skeleton mengikuti jumlah blog, fallback ke 4
const skeletonCount = computed(() => {
  return blogs.value.length > 0 ? blogs.value.length : 2
})

const fetchBlogs = async () => {
  try {
    const query = `*[_type == "blog"]{
      _id,
      "imageUrl": image.asset->url,
      title,
      body,
      author,
      _createdAt,
      slug
    } | order(_createdAt desc)`

    blogs.value = await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBlogs)
</script>
