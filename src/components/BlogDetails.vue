<template>
  <div class="md:px-4 relative">
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute flex items-center justify-center bg-white h-full w-full">
      <span>Loading...</span>
    </div>

    <!-- Back Button -->
    <RouterLink class="text-gray-600 flex items-center gap-2" to="/blog">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-arrow-left"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12H8" />
        <path d="m12 8-4 4 4 4" />
      </svg>
      Back
    </RouterLink>

    <!-- Blog Title -->
    <h1 class="text-3xl pt-4 font-semibold">{{ blog?.title }}</h1>

    <!-- Published Date and Author Info -->
    <div class="mt-2 flex flex-col md:flex-row justify-between w-full border-b-2 pb-4 mb-4">
      <p>
        Published on <span class="font-semibold">{{ formattedDate }}</span>
      </p>
      <p>
        Author : <span class="font-semibold">{{ blog?.author }}</span>
      </p>
    </div>

    <!-- Blog Image -->
    <img
      :src="blog?.imageUrl"
      alt="blog Image"
      class="w-full md:w-[768px] h-72 object-cover rounded-lg"
    />

    <!-- Blog Body (Content) -->
    <div v-html="bodyContent" class="mt-4 prose prose-sm md:prose-lg" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { formatDate } from '@/utils/dateFormat' // Sesuaikan path jika berbeda
import { useRoute, RouterLink } from 'vue-router'
import client from '../sanityClient'
import blockContentToHtml from '@sanity/block-content-to-html'

// State untuk memantau loading dan data blog
const loading = ref(false)
const blog = ref(null)
const route = useRoute()
const slug = route.params.slug // Ambil slug dari URL

// Fetch data blog berdasarkan slug
onBeforeMount(async () => {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      "imageUrl": image.asset->url,
      title,
      body,
      author,
      _createdAt,
      slug
    }`

  loading.value = true

  try {
    blog.value = await client.fetch(query, { slug }) // Fetch data berdasarkan slug
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  loading.value = false
})

// Format tanggal menggunakan computed property agar terupdate secara otomatis
const formattedDate = computed(() => {
  return blog.value ? formatDate(blog.value._createdAt) : '' // Format tanggal jika blog ada
})

// Mengonversi body (yang berupa blok) ke HTML menggunakan block-content-to-html
const bodyContent = computed(() => {
  return blog.value && blog.value.body ? blockContentToHtml({ blocks: blog.value.body }) : ''
})
</script>

<style scoped>
/* Styling tambahan */
.container {
  width: 100%;
}

.relative {
  position: relative;
}

img {
  max-width: 100%;
}
</style>
