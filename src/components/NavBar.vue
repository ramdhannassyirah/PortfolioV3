<template>
  <nav class="max-w-6xl mx-auto lg:px-0">
    <div class="flex items-center justify-between w-full px-4 py-3 border-b">
      <div class="flex items-center gap-2">
        <RouterLink
          class="hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 hover:text-black text-gray-600"
          to="/"
        >
          <Icon icon="hugeicons:home-04" width="24" height="24" />
        </RouterLink>
        <RouterLink
          class="hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 hover:text-black text-gray-600"
          to="/projects"
        >
          <Icon icon="mage:file" width="24" height="24" />
        </RouterLink>
        <RouterLink
          class="hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 hover:text-black text-gray-600"
          to="/blog"
        >
          <Icon icon="ri:blogger-line" width="24" height="24" />
        </RouterLink>
      </div>
      <a
        href="/cv/CVRamdhanNassyirah.pdf"
        download
        class="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        <Icon icon="heroicons:arrow-down-tray" width="18" height="18" />
        Download CV
      </a>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>
