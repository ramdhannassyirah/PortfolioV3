<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer class="bg-black text-white py-16 px-6 lg:px-16">

      <!-- Menu -->
      <div class="flex justify-center mb-12 px-8">
        <nav class="flex flex-wrap items-center justify-center gap-10 text-sm tracking-widest uppercase">

          <RouterLink to="/" exact-active-class=" border-b  border-red-500 pb-1 text-red-500 "
            class="hover:text-red-500 transition">Home
          </RouterLink>
          <RouterLink to="/about" exact-active-class=" border-b  border-red-500 pb-1 text-red-500"
            class="hover:text-red-500 transition">
            About</RouterLink>
          <RouterLink to="/work" exact-active-class=" border-b  border-red-500 pb-1 text-red-500"
            class="hover:text-red-500 transition">Works</RouterLink>
          <RouterLink to="/projects" exact-active-class=" border-b  border-red-500 pb-1 text-red-500"
            class="hover:text-red-500 transition">Projects</RouterLink>
          <RouterLink to="/articles" exact-active-class=" border-b  border-red-500 pb-1 text-red-500"
            class="hover:text-red-500 transition">
            Articles</RouterLink>
          <RouterLink to="/contact" exact-active-class=" border-b  border-red-500 pb-1 text-red-500"
            class="hover:text-red-500 transition">Contact</RouterLink>

        </nav>
      </div>

      <!-- Divider -->
      <div class=" mb-12 w-full">
        <div class="w-full h-px  bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px]""></div>
      </div>

      <!-- Bottom -->
      <div class=" flex justify-between gap-10 items-center text-sm">

          <!-- Copyright -->
          <p class="text-gray-400 text-xs md:text-md">
            © {{ new Date().getFullYear() }}
            <span class="text-red-500 font-semibold">Ramdhan Nassyirah</span>.
            All rights reserved.
          </p>

          <!-- Social -->
          <div class="flex gap-6 text-gray-400">

            <a href="https://github.com/ramdhannassyirah" target="_blank" class="hover:text-red-500 transition">
              <Icon icon="simple-icons:github" width="18" />
            </a>

            <a href="https://linkedin.com/in/rmramdhannassyirah" target="_blank" class="hover:text-red-500 transition">
              <Icon icon="simple-icons:linkedin" width="18" />
            </a>

            <a href="mailto:ramdhannassyirahh@gmail.com" class="hover:text-red-500 transition">
              <Icon icon="mdi:email-outline" width="20" />
            </a>

          </div>

        </div>

    </footer>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import Navbar from '@/components/NavBar.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
