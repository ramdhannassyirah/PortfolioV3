<template>
  <aside class="sticky top-0 z-10 h-screen p-4 bg-white border-r w-60">
    <div class="flex flex-col gap-3">
      <RouterLink
        to="/"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        :class="{ 'bg-slate-100': $route.path === '/' }"
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
          class="lucide lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          /></svg
        >Home</RouterLink
      >
      <RouterLink
        active-class="bg-slate-100"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        to="/about"
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
          class="lucide lucide-notepad-text"
        >
          <path d="M8 2v4" />
          <path d="M12 2v4" />
          <path d="M16 2v4" />
          <rect width="16" height="18" x="4" y="4" rx="2" />
          <path d="M8 10h6" />
          <path d="M8 14h8" />
          <path d="M8 18h5" /></svg
        >About</RouterLink
      >
      <RouterLink
        active-class="bg-slate-100"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        to="/blog"
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
          class="lucide lucide-square-pen"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path
            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
          />
        </svg>
        Blog</RouterLink
      >
      <RouterLink
        active-class="bg-slate-100"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        to="/projects"
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
          class="lucide lucide-folder-open-dot"
        >
          <path
            d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
          />
          <circle cx="14" cy="15" r="1" />
        </svg>
        Projects</RouterLink
      >
      <RouterLink
        active-class="bg-slate-100"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        to="/contact"
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
          class="lucide lucide-message-circle-more"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg>
        Contact</RouterLink
      >
      <a
        active-class="bg-slate-100"
        class="flex items-center gap-2 px-2 py-2 rounded-md"
        href="https://dunstock.web.id/"
        target="_blank"
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
          class="lucide lucide-hand-platter"
        >
          <path d="M12 3V2" />
          <path
            d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
          />
          <path d="M2 14h12a2 2 0 0 1 0 4h-2" />
          <path d="M4 10h16" />
          <path d="M5 10a7 7 0 0 1 14 0" />
          <path d="M5 14v6a1 1 0 0 1-1 1H2" />
        </svg>
        Service
      </a>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Tailwind utility classes already applied in template */
</style>
