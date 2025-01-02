<template>
  <div class="grid md:grid-cols-2 gap-4 w-full">
    <CardContact
      v-for="(contact, index) in contacts"
      :key="index"
      :title="contact.title"
      :description="contact.description"
      :link="contact.link"
    >
      <template #default>
        <svg
          v-if="contact.icon === 'whatsapp'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="text-xl"
        >
          <path
            d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm0 2c-5.522 0-10 4.478-10 10s4.478 10 10 10c1.263 0 2.464-.258 3.563-.705l3.124 3.124-1.197-3.692c.335-.931.522-1.923.522-2.877 0-5.522-4.478-10-10-10zm2.915 5.185c.417.084.824.276 1.187.548.363.271.674.58.929.927.256.346.467.759.645 1.179.178.42.325.857.444 1.299.119.442.217.887.305 1.338-.042.223-.078.448-.119.672-.227 1.229-.732 2.499-1.419 3.57-.263.45-.574.855-.936 1.222-.362.366-.767.67-1.198.91-1.46.778-3.216.6-4.764-.343-.55-.402-.939-.85-1.205-1.386-.265-.535-.421-1.138-.47-1.755-.03-.506.079-1.031.325-1.503.286-.633.638-1.221 1.034-1.746 1.447-1.94 3.975-2.173 5.917-.45z"
          />
        </svg>

        <svg
          v-if="contact.icon === 'linkedin'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>

        <svg
          v-if="contact.icon === 'instagram'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>

        <svg
          v-if="contact.icon === 'github'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </template>
    </CardContact>
  </div>
</template>

<script setup>
import CardContact from './common/Card/CardContact.vue'

const contacts = [
  {
    title: 'WhatsApp',
    description: 'Chat with me on WhatsApp',
    link: 'https://wa.me/085156330411',
    icon: 'whatsapp',
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    link: 'https://linkedin.com/in/ramdhannassyirah',
    icon: 'linkedin',
  },
  {
    title: 'Instagram',
    description: 'Follow & Chat me on Instagram',
    link: 'https://instagram.com/ramdhannassyirah',
    icon: 'instagram',
  },
  {
    title: 'GitHub',
    description: 'Check out my code on GitHub',
    link: 'https://github.com/ramdhannassyirah',
    icon: 'github',
  },
]
</script>
