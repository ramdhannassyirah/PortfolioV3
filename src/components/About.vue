<template>
  <section class="bg-black text-white px-6 lg:px-16">

    <div class=" py-20">
      <p class="md:text-3xl text-xl text-gray-300 max-w-6xl font-noto-serif lg:text-justify leading-relaxed">
        I'm <span class="text-white font-semibold">Ramdhan Nassyirah</span>, a Full Stack Developer with
        over 1 year of experience. I'm passionate about building efficient,
        scalable applications and improving digital experiences through
        thoughtful engineering and modern technologies.
      </p>
    </div>

    <!-- Divider -->
    <div class="stack w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]"></div>

    <div class="stack py-20">
      <Stack />
    </div>

    <!-- Divider -->
    <div class="stack w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]"></div>

    <div class="left py-20 max-w-6xl ">

      <h2 class="text-3xl md:text-4xl font-noto-serif">
        Driving sustained growth
        through technology.
      </h2>

      <p class="text-gray-400 text-xl mt-2 leading-relaxed md:text-justify">
        I focus on creating digital solutions that not only perform efficiently
        but also scale with business needs. By combining thoughtful design with
        precise engineering, I aim to build systems that deliver long-term value,
        reliability, and seamless user experiences.
      </p>

    </div>

  </section>
</template>

<script lang="ts" setup>
import Stack from './Stack.vue';
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  gsap.from(".stack", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".stack",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })

  gsap.from(".left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".left",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  })

})
</script>

<style></style>
