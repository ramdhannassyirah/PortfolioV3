<template>
  <div class="md:px-4 relative">
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
    <RouterLink class="text-gray-600 flex items-center gap-2" to="/projects"
      ><svg
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
      Back</RouterLink
    >
    <h1 class="text-3xl pt-4 font-semibold">{{ project?.title }}</h1>
    <p class="border-b-2 mb-4 py-4 text-gray-600">{{ project?.description }}</p>
    <div class="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
      <p class="text-gray-600 text-sm">Tech Stack : {{ project?.technologies.join(', ') }}</p>
      <a
        href="https://github.com/"
        class="text-gray-600 text-sm font-semibold flex items-center w-fit gap-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        Source Code</a
      >
    </div>
    <img
      :src="project?.imageUrl"
      alt="Project Image"
      class="w-full h-72 object-cover object-top rounded-lg"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

import { useRoute, RouterLink } from 'vue-router'
import client from '../sanityClient'
// Pastikan client terkonfigurasi dengan benar
const loading = ref(false)
const route = useRoute()
const slug = route.params.slug // Tangkap slug dari URL
const project = ref(null)

onBeforeMount(async () => {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    technologies
  }`

  loading.value = true

  try {
    project.value = await client.fetch(query, { slug }) // Fetch data berdasarkan slug
  } catch (error) {
    console.error('Error fetching project:', error)
  }

  loading.value = false
})
</script>
