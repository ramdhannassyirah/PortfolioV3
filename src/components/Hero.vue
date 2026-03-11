<template>
  <section class="relative w-full h-screen overflow-hidden bg-[#630719]">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center " style="background-image: url('/dun2.png')"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>
    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
      <div class="max-w-4xl mx-auto px-6 text-white text-center ">
        <p class="mb-4 text-sm tracking-[0.3em] text-red-400 font-semibold uppercase">
          Full Stack Developer
        </p>

        <h1 class="text-4xl md:text-7xl font-semibold leading-tight mb-6 font-noto-serif">
          Turning Ideas Into <br>
          Scalable Web Applications
        </h1>

        <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto">
          I build fast, secure, and scalable web applications with modern technologies
          to create seamless digital experiences.
        </p>
      </div>
    </div>

    <div class="absolute -bottom-4 w-full">
      <CurvedLoop marquee-text="Build ✦ Innovate ✦ Scale ✦ Create ✦ Automate ✦ Deploy ✦" :speed="2" :curve-amount="210"
        direction="left" :interactive="true" />
    </div>

  </section>
</template>

<script setup lang="ts">
import CurvedLoop from './common/CurvedLoop.vue';
</script>
