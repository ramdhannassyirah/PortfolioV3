<template>
  <div class="flex container w-full items-center gap-4 overflow-x-scroll">
    <CardBlog v-for="blogs in blog" :blog="blogs" class="flex-shrink-0 mt-2" :key="blogs.id" />
  </div>
</template>

<script setup>
import CardBlog from './common/Card/CardBlog.vue'
import { ref, onBeforeMount } from 'vue'
import sanityClient from '../sanityClient.js'

// Inisialisasi Sanity client

// State untuk menyimpan data proyek
const blog = ref([])

// Fungsi untuk fetch data dari Sanity
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
    }`
    const fetchedBlogs = await sanityClient.fetch(query)

    // Mengurutkan blog berdasarkan _createdAt (waktu posting) secara menurun
    blog.value = fetchedBlogs.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
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
