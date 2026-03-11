<template>
  <section class="relative w-full h-screen overflow-hidden bg-[#630719]">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center " style="background-image: url('/dun2.png')"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>
    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
      <div ref="hero" class="max-w-4xl mx-auto px-6 text-white text-center">

        <p class="subtitle mb-4 text-sm tracking-[0.3em] text-red-400 font-semibold uppercase">
          Full Stack Developer
        </p>

        <h1 class="title text-4xl md:text-7xl font-semibold leading-tight mb-6 font-noto-serif">
          Turning Ideas Into <br>
          Scalable Web Applications
        </h1>

        <p class="desc text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto">
          I build fast, secure, and scalable web applications with modern technologies
          to create seamless digital experiences.
        </p>

      </div>
    </div>

    <div class="absolute -bottom-10  xl:-bottom-4 w-full">
      <CurvedLoop marquee-text="Build ✦ Innovate ✦ Scale ✦ Create ✦ Automate ✦ Deploy ✦" :speed="2" :curve-amount="210"
        direction="left" :interactive="true" />
    </div>

  </section>
</template>

<script setup lang="ts">
import CurvedLoop from './common/CurvedLoop.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {

  const tl = gsap.timeline()

  tl.from(".subtitle", {
    y: 40,
    opacity: 0,
    duration: 0.8
  })
    .from(".title", {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 1
    })
    .from(".desc", {
      y: 40,
      opacity: 0,
      duration: 0.8
    })

})
</script>
