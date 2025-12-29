<template>
  <div class="relative md:px-4">
    <!-- LOADING OVERLAY -->
    <div
      v-if="loading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white "
      aria-live="polite"
      aria-busy="true"
    >
      <svg viewBox="0 0 24 24" class="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H3V16H7V8Z" class="fill-gray-700 animate-bounce" />
        <path d="M14 8H10V16H14V8Z" class="fill-gray-700 animate-bounce [animation-delay:.2s]" />
        <path d="M21 8H17V16H21V8Z" class="fill-gray-700 animate-bounce [animation-delay:.4s]" />
      </svg>
    </div>

    <!-- CONTENT -->
    <RouterLink class="flex items-center gap-2 text-gray-600 hover:text-black" to="/blog">
      ← Back
    </RouterLink>

    <!-- SKELETON TITLE -->
    <h1 v-if="!blog" class="mt-4 h-10 w-3/4 animate-pulse rounded bg-gray-200" />

    <h1 v-else class="pt-4 text-3xl font-semibold">
      {{ blog.title }}
    </h1>

    <!-- META -->
    <div
      v-if="blog"
      class="mt-2 mb-4 flex flex-col justify-between gap-2 border-b-2 pb-4 md:flex-row"
    >
      <p>
        Published on <span class="font-semibold">{{ formattedDate }}</span>
      </p>
      <p>
        Author : <span class="font-semibold">{{ blog.author }}</span>
      </p>
    </div>

    <!-- IMAGE -->
    <div v-if="!blog" class="mt-4 h-64 w-full animate-pulse rounded-lg bg-gray-200" />
    <img v-else :src="blog.imageUrl" alt="Blog Image" class="w-full rounded-lg object-cover" />

    <!-- BODY -->
    <div v-if="blog" v-html="bodyContent" class="prose mt-6 max-w-none" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { formatDate } from '@/utils/dateFormat'
import { useRoute, RouterLink } from 'vue-router'
import client from '../sanityClient'
import blockContentToHtml from '@sanity/block-content-to-html'

const loading = ref(false)
const blog = ref(null)
const route = useRoute()
const slug = route.params.slug

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
    blog.value = await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  loading.value = false
})

const formattedDate = computed(() => {
  return blog.value ? formatDate(blog.value._createdAt) : ''
})

const bodyContent = computed(() => {
  return blog.value && blog.value.body ? blockContentToHtml({ blocks: blog.value.body }) : ''
})
</script>

<style scoped></style>
