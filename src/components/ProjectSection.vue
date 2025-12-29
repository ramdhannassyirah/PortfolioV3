<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link?: string
  repo?: string
}

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <section class="space-y-6">
    <!-- Header -->
    <div>
      <h2 class="flex items-center justify-center gap-2 text-xl font-medium md:justify-start">
        <Icon icon="simple-icons:hyperskill" width="20" height="20" />
        Projects
      </h2>
      <p class="text-sm text-gray-500 text-center md:text-left">
        Beberapa project yang pernah saya kerjakan
      </p>
    </div>

    <!-- Project Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
      >
        <!-- Image -->
        <div class="relative h-44 w-full overflow-hidden bg-gray-100">
          <img
            :src="project.image"
            :alt="project.title"
            class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
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
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Actions -->
          <div class="mt-5 flex gap-4 text-sm">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="font-medium text-blue-600 hover:underline"
            >
              Live Demo
            </a>
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              class="font-medium text-gray-700 hover:underline"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
