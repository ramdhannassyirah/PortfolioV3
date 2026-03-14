<template>
  <div class='bg-black min-h-screen px-4'>
    <div class="max-w-5xl mx-auto py-4 border-b border-gray-400">
      <RouterLink to="/articles" class="text-gray-400 flex items-center gap-1">
        <Icon icon="mynaui:arrow-left-solid" width="24" height="24" /> All Articles
      </RouterLink>
    </div>
    <div class="max-w-4xl mx-auto  ">
      <div class="py-4 max-w-4xl">
        <h1 class=" text-3xl font-semibold text-white font-noto-serif">
          {{ article.title }}
        </h1>
        <div class="mt-2 mb-4 flex flex-col  gap-2  md:flex-row">
          <p class="text-white">
            By <span class="font-semibold ">{{ article.author }}</span>
          </p>
          <p class="text-gray-400">
            {{ formattedDate }}
          </p>
        </div>
      </div>
      <img :src="article.imageUrl" alt="Article Image" class="w-full rounded-lg object-cover" />

      <div v-if="article" v-html="bodyContent" class="prose prose-invert max-w-4xl mx-auto py-4 " />

    </div>

  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref, onBeforeMount, computed } from 'vue'
import { formatDate } from '@/utils/dateFormat'
import { useRoute, RouterLink } from 'vue-router'
import client from '../sanityClient'
import blockContentToHtml from '@sanity/block-content-to-html'
import { BLOG_DETAIL_QUERY } from '@/sanity/queries'

const loading = ref(false)
const article = ref(null)
const route = useRoute()
const slug = route.params.slug

onBeforeMount(async () => {
  loading.value = true

  try {
    article.value = await client.fetch(BLOG_DETAIL_QUERY, { slug })
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  loading.value = false
})

const formattedDate = computed(() => {
  return article.value ? formatDate(article.value._createdAt) : ''
})



const bodyContent = computed(() => {
  return article.value && article.value.body ? blockContentToHtml({ blocks: article.value.body }) : ''
})




</script>

<style></style>
