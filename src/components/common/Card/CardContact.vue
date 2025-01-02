<template>
  <div
    class="max-w-md h-max border rounded-lg gap-2 flex items-end justify-between bg-gradient-to-br p-4 md:p-6 border-slate-300 from-slate-100 to-slate-200"
  >
    <div class="flex-col flex gap-2">
      <h1 class="text-xl font-semibold text-gray-800">
        {{ description }}
      </h1>
      <p class="text-gray-600 my-2 max-w-[250px] text-[10px] md:text-xs">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <a :href="link" class="p-2 px-4 bg-slate-700 w-fit rounded-lg text-white font-semibold"
        >Go to {{ title }}</a
      >
    </div>
    <div
      class="bg-slate-700 text-white w-fit h-fit rounded-full p-4 flex items-center justify-center"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
})
</script>
<style scoped>
@media (min-width: 640px) {
  div {
    max-width: 36rem; /* Adjust for larger screens */
  }
}
</style>
