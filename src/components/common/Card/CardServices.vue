<script setup>
defineProps({
  item: Object,
})
</script>
<template>
  <div
    class="max-w-md border rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden shadow-md bg-white"
  >
    <div class="w-full pt-4 justify-center items-center text-center flex">
      <div class="h-36 w-52 overflow-hidden rounded-lg border">
        <div class="flex items-center justify-start gap-1 border-b bg-neutral-200 px-2 py-1">
          <div class="h-2 w-2 rounded-full border border-neutral-400"></div>
          <div class="h-2 w-2 rounded-full border border-neutral-400"></div>
          <div class="h-2 w-2 rounded-full border border-neutral-400"></div>
        </div>
        <div class="flex justify-center gap-2 bg-neutral-100 p-3 pb-0">
          <div>
            <div
              class="mb-2 border border-neutral-300"
              style="border-radius: 4px; width: 40px; height: 40px"
            ></div>
            <div class="flex flex-col gap-1">
              <div class="h-1 w-10 rounded-full bg-neutral-300"></div>
              <div class="h-1 w-4 rounded-full bg-neutral-200"></div>
              <div class="h-1 w-10 rounded-full bg-neutral-200"></div>
              <div class="h-1 w-10 rounded-full bg-neutral-200"></div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="h-2 w-8 rounded-full bg-neutral-300"></div>
            <div class="flex gap-1">
              <div class="h-1 w-4 rounded-full bg-neutral-300"></div>
              <div class="h-1 w-16 rounded-full bg-neutral-200"></div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col gap-2">
                <div class="w-16 rounded border border-neutral-300" style="height: 20px"></div>
                <div class="w-16 rounded border border-neutral-300" style="height: 20px"></div>
                <div class="w-16 rounded border border-neutral-300" style="height: 20px"></div>
              </div>
              <div class="flex flex-col gap-2">
                <div class="w-14 rounded border border-neutral-300" style="height: 40px"></div>
                <div class="w-14 rounded border border-neutral-300" style="height: 40px"></div>
                <div class="w-14 rounded border border-neutral-300" style="height: 40px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h1 class="text-lg font-semibold text-gray-800">{{ item.title }}</h1>
      <p class="mt-2 text-sm text-gray-600">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  div {
    max-width: 32rem; /* Adjust for larger screens */
  }
}
</style>
