<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link?: string
  repo?: string
}

defineProps<{
  projects: Project[]
  loading?: boolean
}>()
</script>

<template>
  <section class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="flex items-center gap-2 text-xl font-medium">
          <Icon icon="simple-icons:hyperskill" width="20" height="20" />
          Projects
        </h2>
        <p class="text-sm text-gray-500">Beberapa project yang pernah saya kerjakan</p>
      </div>

    </div>

    <!-- GRID -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- SKELETON -->
      <template v-if="loading">
        <div v-for="n in 3" :key="n" class="animate-pulse overflow-hidden rounded-2xl border bg-white shadow-sm">
          <!-- Image skeleton -->
          <div class="h-44 w-full bg-gray-200"></div>

          <!-- Content skeleton -->
          <div class="p-5 space-y-3">
            <div class="h-4 w-3/4 rounded bg-gray-200"></div>
            <div class="h-3 w-full rounded bg-gray-200"></div>
            <div class="h-3 w-5/6 rounded bg-gray-200"></div>

            <div class="flex gap-2 mt-3">
              <div class="h-6 w-14 rounded bg-gray-200"></div>
              <div class="h-6 w-16 rounded bg-gray-200"></div>
              <div class="h-6 w-12 rounded bg-gray-200"></div>
            </div>

            <div class="flex gap-4 mt-4">
              <div class="h-4 w-20 rounded bg-gray-200"></div>
              <div class="h-4 w-24 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </template>

      <!-- REAL DATA -->
      <template v-else>
        <div v-for="(project, index) in projects.slice(0, 3)" :key="index"
          class="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
          <!-- Image -->
          <div class="relative h-44 w-full overflow-hidden bg-gray-100">
            <img :src="project.imageUrl" :alt="project.title"
              class="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105" />
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="font-semibold text-gray-800">
              {{ project.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-600 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {{ tech }}
              </span>
            </div>

            <!-- Actions -->
            <div class="mt-5 flex gap-2 text-sm">
              <a v-if="project.link" :href="project.link" target="_blank"
                class="border text-xs py-2 px-4 rounded-full border-black hover:bg-black hover:text-white duration-200">
                Live Demo
              </a>
              <a v-if="project.repo" :href="project.repo" target="_blank"
                class="border text-xs py-2 px-4 rounded-full border-black bg-black text-white hover:bg-transparent hover:text-black duration-200">
                Repository
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class=" flex items-center justify-center ">
      <RouterLink to="/projects"
        class="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-gray-800">
        Lihat Selengkapnya
      </RouterLink>
    </div>
  </section>
</template>
