<template>
  <div class="md:px-4 relative">
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute flex items-center justify-center bg-white h-full w-full">
      <!-- Component: Square horizontal base sized spinner -->
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-08a desc-08a"
        class="w-6 h-6"
      >
        <title id="title-08a">Icon title</title>
        <desc id="desc-08a">Some desc</desc>
        <path d="M7 8H3V16H7V8Z" class="fill-gray-700 animate animate-bounce" />
        <path
          d="M14 8H10V16H14V8Z"
          class="fill-gray-700 animate animate-bounce [animation-delay:.2s]"
        />
        <path
          d="M21 8H17V16H21V8Z"
          class="fill-gray-700 animate animate-bounce [animation-delay:.4s]"
        />
      </svg>
      <!-- End Square horizontal base sized spinner -->
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
