<template>
  <section class='bg-black px-6 lg:px-16 py-24 '>
    <div class="flex items-center justify-between pb-8">
      <h1 class="text-5xl md:text-6xl font-noto-serif text-white">Latest <span class="text-red-500">Articles</span>
      </h1>
      <RouterLink to="/articles"
        class="text-gray-500 hover:text-red-400 text-sm shrink-0 transition-colors duration-300">All
        Articles
      </RouterLink>
    </div>
    <div class=" w-36 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]"></div>
    <div class="mt-8 grid md:grid-cols-3 gap-8">
      <CardArticle v-for="i of articles" :key="i" :article='i' />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import CardArticle from './common/Card/Articles.vue'
import { ref, onMounted } from 'vue'
import sanityClient from '../sanityClient.js'
import { BLOG_LIST_QUERY } from '@/sanity/queries'

const loading = ref(true)
const articles = ref([])



const fetchBlogs = async () => {
  try {
    articles.value = await sanityClient.fetch(BLOG_LIST_QUERY)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBlogs)
</script>

<style></style>
