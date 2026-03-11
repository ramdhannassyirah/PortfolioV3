<template>
  <section class="bg-black text-white py-24 px-6 lg:px-16 overflow-hidden">
    <div class="">

      <!-- Heading -->
      <h1 class="title-expertise text-5xl md:text-6xl font-noto-serif leading-tight max-w-4xl mb-16">
        Turning ideas into
        <span class="text-red-500 font-noto-serif">high-impact</span>
        digital experiences through proven expertise.
      </h1>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 gap-8">

        <!-- Backend Card -->
        <div
          class="left-card group p-[1px] rounded-2xl bg-transparent bg-gradient-to-r from-red-500 to-transparent transition duration-500">
          <div class="rounded-2xl p-8 bg-[#0b0b0b] h-full">

            <!-- Icon -->
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a1a] mb-6">
              <Icon icon="mdi:server" class="text-red-500" />
            </div>

            <h3 class="text-2xl font-semibold mb-4">Backend</h3>

            <p class="text-gray-400 leading-relaxed mb-6">
              In the intricate realm of web development, I specialize in crafting the digital backbone — the unseen
              force
              that powers a website’s functionality.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="tag">PHP</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Laravel</span>
            </div>

          </div>
        </div>


        <!-- Frontend Card -->
        <div
          class="right-card group p-[1px] rounded-2xl bg-transparent bg-gradient-to-l from-red-500 to-transparent transition duration-500">
          <div class="rounded-2xl p-8 bg-[#0b0b0b] h-full">

            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a1a] mb-6">
              <Icon icon="mdi:monitor-dashboard" class="text-red-500" />
            </div>

            <h3 class="text-2xl font-semibold mb-4">Frontend</h3>

            <p class="text-gray-400 leading-relaxed mb-6">
              I also possess proficiency in frontend development, translating design into captivating and responsive
              user
              interfaces.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="tag">VueJS</span>
              <span class="tag">Nuxt</span>
              <span class="tag">Tailwind</span>
              <span class="tag">CSS</span>
              <span class="tag">UI Design with Figma</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  gsap.from(".title-expertise", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".title-expertise",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })

  gsap.from(".left-card", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".left-card",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })

  gsap.from(".right-card", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".right-card",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })

})
</script>

<style scoped>
.tag {
  @apply text-sm px-3 py-1 rounded-full bg-[#141414] text-gray-300 border border-gray-800;
}

.tag:hover {
  @apply border-[#ef4444] text-white;
}

h1 {
  font-family: "Playfair Display", serif;
}
</style>