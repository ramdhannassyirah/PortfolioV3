<script setup>
import CardSkills from './common/Card/CardSkills.vue'
</script>

<template>
  <div class="overflow-hidden relative py-2">
    <!-- Wrapper untuk marquee -->
    <div class="flex items-center gap-4 animate-marquee whitespace-nowrap">
      <!-- Elemen asli -->
      <div v-for="item in 10" :key="'original-' + item" class="shrink-0">
        <CardSkills />
      </div>
      <!-- Duplikasi elemen untuk efek seamless -->
      <div v-for="item in 10" :key="'duplicate-' + item" class="shrink-0">
        <CardSkills />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
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
