<template>
  <div class="about md:px-4">
    <h1 class="text-3xl font-semibold">About</h1>
    <p class="border-b-2 mb-4 py-4 text-gray-600">A short story of me</p>

    <section class="flex flex-col w-full">
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

    <section class="flex flex-col gap-1 border-t-2 my-4 py-4">
      <h1 class="text-xl font-medium flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
      <div class="flex flex-col gap-2 lg:flex-row justify-between w-full">
        <p>My professional career journey</p>
        <button
          class="flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700"
        >
          <div
            data-testid="download-icon-container"
            class="overflow-hidden border-b-2 border-neutral-600"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              data-testid="download-icon"
              class="animate-rain-arrow"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="animate-bounce transition-all duration-300"
                d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"
              ></path>
            </svg>
          </div>
          <span>Download Resume</span>
        </button>
      </div>
    </section>

    <section class="flex flex-col gap-4 border-y-2 mt-4 py-4">
      <div class="">
        <h1 class="text-xl font-medium flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
      </div>
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
