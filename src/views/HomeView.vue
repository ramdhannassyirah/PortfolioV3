<template>
  <div class="space-y-10">
    <!-- HERO -->
    <div class="grid gap-8 border-b-2 pb-8 md:grid-cols-2 md:items-center md:justify-items-center">
      <!-- TEXT -->
      <div class="space-y-4 order-2 md:order-1">
        <h1 class="text-lg font-semibold leading-snug">
          Hi, I'm <br />
          <span class="block text-2xl font-bold text-run sm:text-3xl">
            Frontend / Fullstack Developer
          </span>
        </h1>

        <!-- BADGES -->
        <ul class="flex flex-wrap items-center gap-2">
          <li class="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-1 text-sm">
            Remote worker
            <span class="relative flex h-3 w-3">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
              ></span>
              <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
          </li>
          <li class="rounded-full bg-slate-100 px-4 py-1 text-sm">
            Based in Cianjur <span class="ml-1">🇮🇩</span>
          </li>
        </ul>

        <!-- DESC -->
        <p class="text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-loose md:text-left">
          Web Developer dengan pengalaman ±1 tahun dalam pengembangan aplikasi web modern
          menggunakan Laravel, Vue.js, dan Nuxt.js. Berpengalaman membangun SPA, UI responsif,
          integrasi backend, serta kolaborasi tim menggunakan Git. Terbiasa mengerjakan proyek skala
          nyata dan deadline ketat.
        </p>

        <div class="flex items-center gap-4">
          <div
            class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-slate-100 hover:-translate-y-1"
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
            class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-slate-100 hover:-translate-y-1"
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
            class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer bg-slate-100 hover:-translate-y-1"
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

      <!-- IMAGE -->
      <div class="flex justify-center md:justify-end order-1 md:order-2 drop-shadow-md">
        <img
          src="../assets/image/dun.jpeg"
          alt="Profile"
          class="h-32 w-32 rounded-full object-cover ring-2 ring-black sm:h-40 sm:w-40"
        />
      </div>
    </div>

    <!-- SKILLS -->
    <section class="flex flex-col">
      <h2 class="flex items-center gap-2 text-xl font-medium">
        <Icon icon="simple-icons:hyperskill" width="20" height="20" />
        Skill
      </h2>
      <p class="pb-4 pt-1 text-sm text-left">Kemampuan yang saya miliki.</p>
      <BoardSkills class="border-b-2 pb-6" />
    </section>

    <div class="grid md:grid-cols-2 gap-6 border-b-2 pb-6">
      <!-- WORK EXPERIENCE -->
      <section class="flex flex-col border-b-2 pb-6 md:pb-0 md:border-none">
        <h2 class="flex items-center gap-2 text-xl font-medium">
          <Icon icon="mdi:briefcase-outline" width="22" />
          Pengalaman Kerja
        </h2>

        <div class="relative mt-6 pl-6 space-y-8">
          <div class="relative">
            <span class="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></span>

            <p class="text-xs text-gray-500">Feb 2025 – Saat ini</p>
            <h3 class="font-semibold">
              Fullstack Developer (WFA)
              <span class="font-normal text-gray-500"> — PT Pragma Informatika </span>
            </h3>

            <ul class="mt-2 list-disc pl-4 text-sm text-gray-700 space-y-1">
              <li>Mengembangkan dan memelihara aplikasi web menggunakan Laravel & Vue Inertia</li>
              <li>Membangun website yang responsif dan scalable</li>
              <li>Membuat reusable UI components dengan Tailwind CSS</li>
              <li>Mengelola database MySQL (migration, seeding, optimasi query)</li>
              <li>Kolaborasi tim menggunakan GitLab</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TRAINING & CERTIFICATION -->
      <section class="flex flex-col md:border-l-2 md:border-gray-200 md:pl-6">
        <h2 class="flex items-center gap-2 text-xl font-medium">
          <Icon icon="mdi:certificate-outline" width="22" />
          Pelatihan & Sertifikasi
        </h2>

        <div class="relative mt-6 pl-6 space-y-8">
          <!-- JDA -->
          <div class="relative">
            <span class="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></span>

            <p class="text-xs text-gray-500">Februari – Juli 2024</p>
            <h3 class="font-semibold">Fullstack Developer Program (Fase 1–3)</h3>
            <p class="text-sm text-gray-600">Jabar Digital Academy</p>

            <ul class="mt-2 list-disc pl-4 text-sm text-gray-700 space-y-1">
              <li><strong>Fase 1:</strong> Computational Thinking, HTML, CSS, PHP Fundamental</li>
              <li><strong>Fase 2:</strong> ERD, MySQL, Laravel MVC, Controller & Model</li>
              <li><strong>Fase 3:</strong> Requirement Analysis, SDLC, Project Management</li>
              <li>Final Project (Real Case Project)</li>
            </ul>
          </div>

          <!-- SEKOLAH BETA -->
          <div class="relative">
            <p class="text-xs text-gray-500">Mar – Apr 2023</p>
            <h3 class="font-semibold">Online Training — Sekolah Beta</h3>

            <ul class="mt-2 list-disc pl-4 text-sm text-gray-700 space-y-1">
              <li>Pengembangan website menggunakan Nuxt.js & Supabase</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <!-- BLOG -->
    <section class="flex flex-col">
      <h2 class="flex items-center gap-2 text-xl font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-book-open-text"
        >
          <path d="M12 7v14" />
          <path d="M16 12h2" />
          <path d="M16 8h2" />
          <path
            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
          />
          <path d="M6 12h2" />
          <path d="M6 8h2" />
        </svg>
        Blog
      </h2>
      <p class="pb-4 pt-1 text-sm">Selamat membaca blog saya</p>
      <BoardBlog class="border-b-2 pb-6" />
    </section>

    <!-- PROJECT -->
    <ProjectSection :projects="projects" :loading="isLoading" />
  </div>
</template>

<script setup>
import BoardBlog from '@/components/BoardBlog.vue'
import BoardSkills from '@/components/BoardSkills.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted, ref } from 'vue'
import sanityClient from '@/sanityClient'
import { PROJECT_LIST_QUERY } from '@/sanity/queries'

const projects = ref()
const isLoading = ref(true)

const fetchProjects = async () => {
  try {
    const response = await sanityClient.fetch(PROJECT_LIST_QUERY)
    projects.value = response
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}

gsap.registerPlugin(TextPlugin)

onMounted(() => {
  gsap.to('.text-run', {
    repeat: -1,
    repeatDelay: 1,
    duration: 3,
    text: {
      value: 'Ramdhan Nassyirah',
      delimiter: '',
      ease: 'none',
    },

    yoyo: true,
  })

  fetchProjects()
  isLoading.value = false
})
</script>
