<template>
  <div :style="{ height: '65px', position: 'relative', overflow: 'hidden' }">
    <LogoLoop :logos="imageLogos" :speed="120" direction="left" :logoHeight="60" :gap="60" :pauseOnHover="true"
      :scaleOnHover="true" :fadeOut="true" fadeOutColor="#000000" ariaLabel="Technology partners" />
  </div>
</template>

<script setup>
import LogoLoop from './common/LogoLoop.vue';

const imageLogos = [
  { src: '/stack/js.png', title: 'Java Script', href: 'https://vitejs.dev' },
  { src: '/stack/php.png', title: 'Php', href: 'https://vitejs.dev' },
  { src: '/stack/vue.png', title: 'Vue.js', href: 'https://vuejs.org' },
  { src: '/stack/nuxt.png', title: 'Nuxt', href: 'https://vuejs.org' },
  { src: '/stack/tailwind-css.png', title: 'Tailwind CSS', href: 'https://vuejs.org' },
  { src: '/stack/laravel.png', title: 'Laravel', href: 'https://nodejs.org' },
  { src: '/stack/postgre.png', title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { src: '/stack/mysql.png', title: 'MYSQL', href: 'https://www.postgresql.org' },
  { src: '/stack/git.png', title: 'git', href: 'https://www.postgresql.org' },
  { src: '/stack/docker.png', title: 'docker', href: 'https://www.postgresql.org' },
];
</script>