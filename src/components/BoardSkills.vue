<template>
  <div class="overflow-hidden relative py-2">
    <!-- Wrapper untuk marquee -->
    <div class="flex items-center gap-4 animate-marquee whitespace-nowrap">
      <!-- Duplikasi elemen untuk efek seamless -->
      <div v-for="item in techs" :key="'original-' + item" class="shrink-0">
        <div class="flex items-center bg-white shadow-md border rounded-full px-4 py-1 gap-3">
          <p class="text-sm font-semibold text-gray-800">{{ item }}</p>
        </div>
      </div>
      <div v-for="item in techs" :key="'duplicate-' + item" class="shrink-0">
        <div class="flex items-center bg-white shadow-md border rounded-full px-4 py-1 gap-3">
          <p class="text-sm font-semibold text-gray-800">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const techs = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Laravel']
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* Moved to 50% to ensure continuity */
  }
}

.animate-marquee {
  animation: marquee 70s linear infinite; /* Durasi animasi */
  display: flex;
  width: max-content; /* Ukuran fleksibel untuk elemen duplikat */
}
.shrink-0 {
  flex-shrink: 0; /* Mencegah elemen mengecil */
}
</style>
