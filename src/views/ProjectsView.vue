<script setup lang="ts">
import { onMounted, ref } from 'vue'
import sanityClient from '@/sanityClient'
import { PROJECT_LIST_QUERY } from '@/sanity/queries'

const projects = ref()
const isLoading = ref(true)

const fetchProjects = async () => {
  try {
    const response = await sanityClient.fetch(PROJECT_LIST_QUERY)
    projects.value = response
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <section class="space-y-6">
    <!-- Header -->
    <div class="border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-6 py-10">

        <h1 class="text-4xl text-white font-noto-serif mb-2">
          Projects
        </h1>

        <div class="flex items-center gap-2 text-sm text-gray-400">
          <RouterLink to="/" class="hover:text-red-500 transition">
            Home
          </RouterLink>

          <span>/</span>

          <span class="text-red-500">Projects</span>
        </div>

      </div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-3 px-6 gap-8">

      <!-- Skeleton -->
      <template v-if="isLoading">
        <div v-for="i in 6" :key="i" class="rounded-lg  bg-[#0b0b0b] overflow-hidden animate-pulse">

          <!-- Image Skeleton -->
          <div class="h-52 bg-gray-500"></div>

          <!-- Content Skeleton -->
          <div class="p-6 space-y-4">

            <div class="h-4 bg-gray-500 rounded w-3/4"></div>

            <div class="space-y-2">
              <div class="h-3 bg-gray-500 rounded"></div>
              <div class="h-3 bg-gray-500 rounded w-5/6"></div>
              <div class="h-3 bg-gray-500 rounded w-2/3"></div>
            </div>

            <div class="flex gap-2 pt-2">
              <div class="h-6 w-16 bg-gray-500 rounded-full"></div>
              <div class="h-6 w-16 bg-gray-500 rounded-full"></div>
              <div class="h-6 w-16 bg-gray-500 rounded-full"></div>
            </div>

            <div class="flex gap-3 pt-4">
              <div class="h-8 w-24 bg-gray-500 rounded-full"></div>
              <div class="h-8 w-24 bg-gray-500 rounded-full"></div>
            </div>

          </div>
        </div>
      </template>

      <div v-else v-for="(project, index) in projects" :key="index"
        class="group relative overflow-hidden rounded-lg  bg-[#0b0b0b] transition duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]">

        <!-- Image -->
        <div class="relative h-52 w-full overflow-hidden">
          <img :src="project.imageUrl" :alt="project.title"
            class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110" />

          <!-- overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-3">

          <h3 class="text-lg font-semibold text-white">
            {{ project.title }}
          </h3>

          <p class="text-sm text-gray-400 line-clamp-3 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 pt-2">
            <span v-for="tech in project.technologies" :key="tech"
              class="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 bg-[#111]">
              {{ tech }}
            </span>
          </div>

          <!-- Actions -->
          <div class="flex gap-3 pt-4">

            <a v-if="project.link" :href="project.link" target="_blank"
              class="text-xs px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
              Live Demo
            </a>

            <a v-if="project.repo" :href="project.repo" target="_blank"
              class="text-xs px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-500 transition">
              Repository
            </a>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>
