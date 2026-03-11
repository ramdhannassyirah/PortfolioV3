<template>
  <BubbleMenu :logo="''" :items="items" menu-aria-label="Toggle navigation" menu-bg="#ffffff"
    menu-content-color="#111111" :use-fixed-position="true" animation-ease="back.out(1.5)" :animation-duration="0.5"
    :stagger-delay="0.12" />
</template>

<script setup>
import BubbleMenu from '@/components/common/BubbleMenu.vue'

const items = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  }
]
</script>