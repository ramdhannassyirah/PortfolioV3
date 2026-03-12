<template>
  <section class="bg-black text-white py-24 px-6 lg:px-16">

    <!-- Title -->
    <div class="max-w-6xl mx-auto text-center mb-16">
      <h2 class="text-5xl md:text-6xl font-bold mb-4 font-noto-serif"> Experience</h2>
      <p class="text-gray-400 tracking-widest uppercase text-sm">My professional journey</p>
    </div>

    <div ref="timeline" class="relative ">

      <!-- base line -->
      <div class="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-800"></div>

      <!-- progress line -->
      <div ref="progressLine" class="absolute left-1/2 -translate-x-1/2 w-[2px]
  bg-gradient-to-b from-red-400 via-red-500 to-transparent
  shadow-[0_0_20px_#ef4444]" style="height:0%"></div>

      <!-- glow head -->
      <div ref="glowHead" class="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full
  bg-red-400 blur-[1px]
  shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444]" style="top:0%"></div>

      <div v-for="(exp, index) in experiences" :key="index"
        class="timeline-item relative flex flex-col md:flex-row items-center mb-16"
        :class="index % 2 ? 'md:flex-row-reverse md:text-end' : ''">

        <div class="hidden md:block md:w-1/2"></div>

        <!-- dot -->
        <div class="hidden md:flex items-center justify-center w-10">
          <div class="dot w-4 h-4 rounded-full bg-gray-600"></div>
        </div>

        <!-- card -->
        <div class="card w-full md:w-1/2 bg-[#0b0b0b]  rounded-xl p-6 space-y-2 opacity-0">

          <h3 class="text-3xl md:text-5xl font-noto font-semibold">{{ exp.title }}</h3>
          <p class="text-red-400 text-sm">{{ exp.company }}</p>
          <p class="text-gray-400 text-sm mb-2">{{ exp.period }}</p>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timeline = ref(null)
const progressLine = ref(null)
const glowHead = ref(null)

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "PT Pragma Informatika",
    period: "Jan 2026 – Present",
  },
  {
    title: "Full Stack Developer",
    company: "PT Pragma Informatika",
    period: "Feb 2025 – Feb 2026",
  },
  {
    title: "Full Stack Developer",
    company: "Self Employed",
    period: "Jul 2024 – Present",
  },
  {
    title: "Web Developer",
    company: "Entercode",
    period: "Jan 2025 – Mar 2025",
  },
  {
    title: "Training Participant",
    company: "Jabar Istimewa Digital Academy",
    period: "Apr 2024 – Jul 2024",
  },
  {
    title: "Training Participant",
    company: "1000 Startup Digital Indonesia",
    period: "Aug 2023 – Okt 2023",
  }
]

onMounted(() => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: timeline.value,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  })

  tl.to(progressLine.value, {
    height: "100%",
    ease: "none"
  })

  tl.to(glowHead.value, {
    top: "100%",
    ease: "none"
  }, 0)

  // cards animation
  gsap.utils.toArray(".card").forEach((card: any, index) => {

    // const direction = index % 2 ? 100 : -100

    gsap.fromTo(card,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        }
      }
    )

  })

  gsap.utils.toArray(".dot").forEach((dot: any) => {

    gsap.to(dot, {
      backgroundColor: "#ef4444",
      boxShadow: "0 0 12px #ef4444",
      scrollTrigger: {
        trigger: dot,
        start: "top 80%"
      }
    })

  })

})
</script>
