<template>
  <div class="group h-full relative  cursor-pointer">
    <div class="h-72 w-full rounded-lg overflow-hidden ">
      <img :src="article.imageUrl"
        class="h-full  group-hover:scale-105 transition-all duration-300 bg-cover bg-center  w-full" alt="">
    </div>
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="space-y-2 p-6 ">
      <p class="  text-xs tracking-[0.3em] text-red-500 font-semibold uppercase">
        Full Stack Developer
      </p>
      <h1
        class="text-white group-hover:text-red-500 transition-all duration-300 font-semibold leading-tight font-noto-serif">
        {{ article.title }}
      </h1>
      <!-- <p class=" text-gray-300">
        I build fast, secure, and scalable web applications with modern technologies
        to create seamless digital experiences.
      </p> -->
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  article: {
    type: Object,
    required: true
  }
})


</script>

<style></style>