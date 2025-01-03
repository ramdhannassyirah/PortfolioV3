<template>
  <div class="md:px-4 relative">
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute flex items-center justify-center bg-white h-full w-full">
      <span>Loading...</span>
    </div>
    <h1 class="text-2xl font-semibold">Welcome to my blog!</h1>
    <p class="border-b-2 mb-4 pb-4 text-gray-600">Your Source for Expert Tips and Insights!</p>
    <div class="grid md:grid-cols-2 gap-4">
      <CardBigBlog v-for="blogs in blog" :blog="blogs" class="flex-shrink-0 mt-2" :key="blogs.id" />
    </div>
  </div>
</template>

<script setup>
import CardBigBlog from '@/components/common/Card/CardBigBlog.vue'
import { ref, onBeforeMount } from 'vue'
import sanityClient from '../sanityClient.js'

const loading = ref(false)

// State untuk menyimpan data proyek
const blog = ref([])

// Fungsi untuk fetch data dari Sanity
const fetchBlogs = async () => {
  loading.value = true

  try {
    const query = `*[_type == "blog"]{
      _id,
      "imageUrl": image.asset->url,
      title,
      body,
      author,
      _createdAt,
      slug
    }`
    const fetchedBlogs = await sanityClient.fetch(query)

    // Mengurutkan blog berdasarkan _createdAt (waktu posting) secara menurun
    blog.value = fetchedBlogs.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
  loading.value = false
}

// Fetch data saat komponen di-mount
onBeforeMount(() => {
  fetchBlogs()
})
</script>

<style>
.container {
  overflow: auto; /* Memungkinkan scroll */
  scrollbar-width: none; /* Untuk Firefox */
  -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
}

.container::-webkit-scrollbar {
  display: none; /* Untuk Chrome, Safari, dan Edge baru */
}
</style>
