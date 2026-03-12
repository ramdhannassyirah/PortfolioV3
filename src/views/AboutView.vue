<template>
  <!-- Header -->
  <div class="border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-10">

      <h1 class="text-4xl text-white font-noto-serif mb-2">
        About Me
      </h1>

      <div class="flex items-center gap-2 text-sm text-gray-400">
        <RouterLink to="/" class="hover:text-red-500 transition">
          Home
        </RouterLink>

        <span>/</span>

        <span class="text-red-500">About</span>
      </div>

    </div>
  </div>

  <div ref="container" class="px-6 py-16 max-w-7xl mx-auto">

    <div ref="aboutText" class="space-y-2">
      <h1 class="text-gray-100 text-3xl font-noto-serif">
        I'm <span class="text-red-500">Ramdhan Nassyirah</span>, a
        Full Stack Developer with over <span class="text-red-500">1 years</span>
        of experience crafting production-grade systems.
      </h1>

      <p class="text-gray-400 leading-loose">
        I'm enthusiastic about efficiency, innovation, enhancing processes,
        and ensuring system security.
      </p>

      <p class="text-gray-400 leading-loose">
        Currently based in Cianjur, Indonesia, I specialize in full-stack
        development with a strong focus on backend engineering,
        frontend engineering, and system integration.
      </p>
    </div>


    <div ref="stats" class="grid grid-cols-3 gap-6 pt-10">
      <div class="text-center">
        <h2 class="text-3xl text-red-500 font-bold font-noto-serif">1+</h2>
        <p class="text-gray-400 text-sm">Years Experience</p>
      </div>

      <div class="text-center">
        <h2 class="text-3xl text-red-500 font-bold font-noto-serif">10+</h2>
        <p class="text-gray-400 text-sm">Projects Built</p>
      </div>

      <div class="text-center">
        <h2 class="text-3xl text-red-500 font-bold font-noto-serif">10+</h2>
        <p class="text-gray-400 text-sm">Technologies</p>
      </div>
    </div>


    <div ref="divider"
      class="w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px] my-16">
    </div>

    <div ref="stackSection">
      <h1 class="text-gray-400 text-center text-lg uppercase tracking-widest pb-8">
        Tech Stack
      </h1>
      <Stack />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Stack from "@/components/Stack.vue"
import { RouterLink } from "vue-router"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const aboutText = ref()
const stats = ref()
const divider = ref()
const stackSection = ref()

onMounted(() => {

  gsap.from(aboutText.value, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  })

  gsap.from(stats.value, {
    scrollTrigger: stats.value,
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2
  })

  gsap.from(divider.value, {
    scrollTrigger: divider.value,
    scaleX: 0,
    duration: 1,
    transformOrigin: "center"
  })

  gsap.from(stackSection.value, {
    scrollTrigger: stackSection.value,
    opacity: 0,
    y: 60,
    duration: 1
  })

})
</script>