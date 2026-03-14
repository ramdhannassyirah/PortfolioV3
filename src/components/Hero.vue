<template>
  <section class="relative w-full min-h-screen overflow-hidden bg-[#630719]">

    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/dun2.png')"></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen">
      <div ref="hero" class="max-w-4xl px-6 text-center text-white">

        <p ref="subtitle" class="mb-4 text-sm font-semibold tracking-[0.3em] text-red-400 uppercase">
          Full Stack Developer
        </p>

        <h1 ref="title" class="mb-6 text-4xl font-semibold leading-tight md:text-7xl font-noto-serif">
          Turning Ideas Into <br />
          Scalable Web Applications
        </h1>

        <p ref="desc" class="max-w-lg mx-auto mb-10 text-lg text-gray-200 md:text-xl">
          I build fast, secure, and scalable web applications with modern
          technologies to create seamless digital experiences.
        </p>

      </div>
    </div>

    <!-- CurvedLoop -->
    <div class="absolute w-full -bottom-10 xl:-bottom-4 z-20">
      <CurvedLoop marquee-text="Build ✦ Innovate ✦ Scale ✦ Create ✦ Automate ✦ Deploy ✦" :speed="2" :curve-amount="210"
        direction="left" :interactive="true" />
    </div>

  </section>
</template>

<script setup lang="ts">
import CurvedLoop from "./common/CurvedLoop.vue"
import { onMounted, ref } from "vue"
import gsap from "gsap"

const subtitle = ref()
const title = ref()
const desc = ref()

onMounted(() => {

  const tl = gsap.timeline()

  tl.from(subtitle.value, {
    y: 40,
    opacity: 0,
    duration: 0.8
  })
    .from(title.value, {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 1
    })
    .from(desc.value, {
      y: 40,
      opacity: 0,
      duration: 0.8
    })

})
</script>
