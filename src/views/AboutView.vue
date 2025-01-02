<template>
  <div class="about px-4">
    <h1 class="text-3xl font-semibold text-center lg:text-left">About</h1>
    <p class="border-b-2 mb-4 py-4 text-center lg:text-left text-gray-600">A short story of me</p>

    <section class="flex flex-col items-center lg:items-start">
      <div class="purse space-y-4 text-justify max-w-3xl">
        <p>
          Hai! I'm Ramdhan Nassyirah, an experienced software engineer with a deep passion for
          creating elegant and efficient solutions through code. With a solid foundation in
          JavaScript as well as a comprehensive understanding of various frontend libraries and
          frameworks, I have navigated the ever-evolving web development landscape with enthusiasm
          and dedication. Currently, domiciled in Cianjur, Indonesia 🇮🇩.
        </p>
        <p>
          As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation
          is the driving force. My collaborative nature allows me to seamlessly integrate with
          teams, contributing not only my technical prowess but also a humble attitude that values
          every member's input.
        </p>
        <p>
          This blog is my platform to share insights, experiences, and discoveries from my journey
          as a software engineer. Join me as we delve into the ever-exciting realm of technology,
          where each line of code has the potential to shape the digital landscape in remarkable
          ways.
        </p>
        <p>
          Thank you for visiting, and I look forward to embarking on this knowledge-sharing
          adventure.
        </p>
      </div>
    </section>

    <section class="flex flex-col items-center gap-2 lg:items-start border-t-2 my-4 py-4">
      <h1 class="text-xl font-medium text-center flex items-center gap-2 lg:text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-briefcase-business"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
        Career
      </h1>
      <div class="flex flex-col lg:flex-row justify-between w-full items-center">
        <p>My professional career journey</p>
        <button class="text-blue-600 hover:underline">Download Resume</button>
      </div>
    </section>

    <section class="flex flex-col items-center gap-4 lg:items-start border-y-2 mt-4 py-4">
      <h1 class="text-xl font-medium text-center flex items-center gap-2 lg:text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-code-xml"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
        Skills
      </h1>
      <p>My coding skills</p>
      <BoardSkills />
    </section>
  </div>
</template>

<script setup>
import BoardSkills from '@/components/BoardSkills.vue'
</script>

<style>
/***** Add additional global or scoped styles here if needed *****/
</style>
