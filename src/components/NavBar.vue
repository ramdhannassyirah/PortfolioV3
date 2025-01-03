<template>
  <nav>
    <div class="py-3 px-4 border-b flex w-full items-center justify-between">
      <div class="flex gap-3 items-center">
        <img
          src="../assets/image/dun.jpeg"
          class="w-10 h-10 rounded-full object-cover object-center ring-1 ring-black flex-shrink-0"
          alt="logo"
        />
        <div class="flex items-center gap-2">
          <RouterLink to="/" class="text-md md:text-lg font-semibold">Ramdhan Nassyirah</RouterLink>
          <div data-testid="tooltip-container" class="relative inline-block">
            <div data-testid="children-container" class="tooltip-container relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-blue-400"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media for Desktop -->
      <div class="lg:flex items-center gap-4 hidden">
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a href="https://github.com/ramdhannassyirah" target="_blank" rel="noopener noreferrer">
            <svg
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
          </a>
        </div>
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a
            href="http://www.instagram.com/ramdhannassyirah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a
            href="https://id.linkedin.com/in/ramdhannassyirah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Navbar Mobile -->
      <div class="lg:hidden">
        <div @click="isOpen = !isOpen" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="bg-white z-50 h-dvh lg:hidden absolute w-full">
      <div class="flex flex-col gap-3 p-4">
        <RouterLink
          to="/"
          class="items-center px-2 rounded-md py-2 gap-2 flex"
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
          class="items-center px-2 rounded-md py-2 gap-2 flex"
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
          class="items-center px-2 rounded-md py-2 gap-2 flex"
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
          class="items-center px-2 rounded-md py-2 gap-2 flex"
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
          class="items-center px-2 rounded-md py-2 gap-2 flex"
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
      </div>
      <div class="flex p-4 items-center justify-end gap-4">
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a href="https://github.com/ramdhannassyirah" target="_blank" rel="noopener noreferrer">
            <svg
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
          </a>
        </div>
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a
            href="http://www.instagram.com/ramdhannassyirah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
        <div
          class="w-10 h-10 bg-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full"
        >
          <a
            href="https://id.linkedin.com/in/ramdhannassyirah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

// Mengontrol scroll behavior saat menu mobile terbuka
watch(isOpen, (newValue) => {
  if (newValue) {
    // Menambahkan overflow-hidden saat menu terbuka
    document.body.style.overflow = 'hidden'
  } else {
    // Menghapus overflow-hidden saat menu tertutup
    document.body.style.overflow = ''
  }
})

// Menambahkan listener untuk menutup menu saat rute berubah
router.beforeEach(() => {
  if (isOpen.value) {
    isOpen.value = false // Tutup menu mobile
  }
})
</script>

<style>
body.overflow-hidden {
  overflow: hidden;
}
</style>
