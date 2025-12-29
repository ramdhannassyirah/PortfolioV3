<template>
  <div class="relative">
    <h1 class="text-2xl font-semibold">Selamat Datang di Blog Saya</h1>
    <p class="mb-4 border-b-2 pb-4 text-gray-600">A short story of me</p>

    <div class="grid gap-4 md:grid-cols-2">
      <template v-if="loading">
        <div v-for="n in 2" :key="n" class="animate-pulse rounded-xl p-4">
          <div class="h-40 w-full rounded-lg bg-gray-200"></div>
          <div class="mt-4 h-4 w-3/4 rounded bg-gray-200"></div>
          <div class="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      </template>

      <CardBigBlog v-else v-for="item in blog" :key="item._id" :blog="item" class="p-4" />
    </div>
  </div>
</template>
<script setup>
import CardBigBlog from '@/components/common/Card/CardBigBlog.vue'
import { ref, onMounted } from 'vue'
import sanityClient from '../sanityClient.js'
import { BLOG_LIST_QUERY } from '@/sanity/queries'

const loading = ref(true)
const blog = ref([])

const fetchBlogs = async () => {
  try {
    blog.value = await sanityClient.fetch(BLOG_LIST_QUERY)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBlogs)
</script>
