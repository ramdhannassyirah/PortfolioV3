<template>
  <div class="relative w-full">
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white z-50">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-08a desc-08a"
        class="w-6 h-6"
      >
        <title id="title-08a">Loading</title>
        <desc id="desc-08a">Loading content</desc>
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
    </div>

    <!-- Blog content -->
    <div class="flex container h-32 w-full items-center gap-4 overflow-x-scroll">
      <CardBlog v-for="blogs in blog" :blog="blogs" class="flex-shrink-0 mt-2" :key="blogs.id" />
    </div>
  </div>
</template>

<script setup>
import CardBlog from './common/Card/CardBlog.vue'
import { ref, onBeforeMount } from 'vue'
import sanityClient from '../sanityClient.js'

// State untuk loading dan data blog
const loading = ref(false)
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
    console.error('Error fetching blogs:', error)
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
