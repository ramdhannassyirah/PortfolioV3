<template>
  <div class="space-y-4">
    <h1 class="text-lg font-semibold">
      Hi, I'm <br />
      <span class="text-run text-3xl font-bold"> Software Engineer </span>
    </h1>
    <ul class="flex gap-2 flex-row lg:gap-4 items-center lg:ml-0">
      <li class="flex items-center gap-3 bg-slate-100 px-4 rounded-full w-fit">
        Remote worker
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </li>
      <li class="bg-slate-100 px-4 rounded-full w-fit">
        Based in Cianjur <span class="ml-1">🇮🇩</span>
      </li>
    </ul>
    <p
      class="leading-relaxed md:leading-loose text-justify max-w-3xl mx-auto lg:mx-0 border-b-2 pb-4"
    >
      Passionate and seasoned Software Engineer with a strong focus on frontend development.
      Proficient in JavaScript and well-versed in all aspects of web technologies. Collaborative
      team player dedicated to delivering efficient, scalable, and visually appealing web
      applications.
    </p>
    <section class="flex flex-col gap-2">
      <h1 class="text-xl font-medium text-center flex items-center gap-2 lg:text-left">
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
          class="lucide lucide-network"
        >
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
          <path d="M12 12V8" />
        </svg>
        Services
      </h1>
      <p>I can deliver the following services</p>
    </section>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted } from 'vue'

gsap.registerPlugin(TextPlugin)

onMounted(() => {
  // Animasi teks untuk memberi kesan mengetik
  gsap.to('.text-run', {
    repeat: -1,
    repeatDelay: 1,
    duration: 3, // Durasi animasi (sesuaikan dengan kebutuhan)
    text: {
      value: 'Ramdhan Nassyirah',
      delimiter: '',
      ease: 'none',
    },

    yoyo: true,
  })
})
</script>
