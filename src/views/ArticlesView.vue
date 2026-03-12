<template>
  <!-- Header -->
  <div class="border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-10">

      <h1 class="text-4xl text-white font-noto-serif mb-2">
        Articles
      </h1>

      <div class="flex items-center gap-2 text-sm text-gray-400">
        <RouterLink to="/" class="hover:text-red-500 transition">
          Home
        </RouterLink>

        <span>/</span>

        <span class="text-red-500">Articles</span>
      </div>

    </div>
  </div>

  <div class="px-6  max-w-7xl mx-auto ">
    <div class="grid md:grid-cols-3 gap-8">

      <!-- Skeleton -->
      <template v-if="loading">
        <div v-for="i in 3" :key="i" class="animate-pulse space-y-4">
          <!-- Image -->
          <div class="h-72 w-full rounded-lg bg-gray-500"></div>

          <div class="space-y-3 px-2">
            <div class="h-3 w-24 bg-gray-500 rounded"></div>
            <div class="h-5 w-3/4 bg-gray-500 rounded"></div>
          </div>
        </div>
      </template>

      <!-- Articles -->
      <template v-else>
        <CardArticle v-for="i in articles" :key="i._id" :article="i" />
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import CardArticle from '@/components/common/Card/Articles.vue'
import { ref, onMounted } from 'vue'
import sanityClient from '../sanityClient.js'
import { BLOG_LIST_QUERY } from '@/sanity/queries'

const loading = ref(true)
const articles = ref([])

const fetchBlogs = async () => {
  try {
    articles.value = await sanityClient.fetch(BLOG_LIST_QUERY)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBlogs)
</script>