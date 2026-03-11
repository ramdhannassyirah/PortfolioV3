<template>
  <BubbleMenu :logo="''" :items="items" menu-aria-label="Toggle navigation" menu-bg="#ffffff"
    menu-content-color="#111111" :use-fixed-position="true" animation-ease="back.out(1.5)" :animation-duration="0.5"
    :stagger-delay="0.12" />
</template>

<script setup>
import BubbleMenu from '@/components/common/BubbleMenu.vue'

const items = [
  {
    label: 'Home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'About',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Work',
    href: '/work',
    ariaLabel: 'Work',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Articles',
    href: '/articles',
    ariaLabel: 'Articles',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  }
]
</script>