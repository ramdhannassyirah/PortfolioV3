<template>
  <div class="relative md:px-4">
    <h1 class="text-2xl font-semibold">Welcome to my blog!</h1>
    <p class="mb-4 border-b-2 pb-4 text-gray-600">Your Source for Expert Tips and Insights!</p>

    <div class="grid gap-4 md:grid-cols-2">
      <!-- SKELETON -->
      <template v-if="loading">
        <div v-for="n in 4" :key="n" class="animate-pulse rounded-xl p-4">
          <div class="h-40 w-full rounded-lg bg-gray-200"></div>
          <div class="mt-4 h-4 w-3/4 rounded bg-gray-200"></div>
          <div class="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      </template>

      <!-- BLOG CARD -->
      <CardBigBlog v-else v-for="item in blog" :key="item._id" :blog="item" class="mt-2" />
    </div>
  </div>
</template>
<script setup>
import CardBigBlog from '@/components/common/Card/CardBigBlog.vue'
import { ref, onMounted } from 'vue'
import sanityClient from '../sanityClient.js'

const loading = ref(true)
const blog = ref([])

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

    blog.value = await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBlogs)
</script>
