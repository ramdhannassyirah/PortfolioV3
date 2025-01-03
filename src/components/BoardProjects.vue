<script setup>
import CardProjects from './common/Card/CardProjects.vue'
import { ref, onBeforeMount } from 'vue'
import sanityClient from '../sanityClient.js'

// Inisialisasi Sanity client

// State untuk menyimpan data proyek
const projects = ref([])

// Fungsi untuk fetch data dari Sanity
const fetchProjects = async () => {
  try {
    const query = `*[_type == "project"]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      technologies,
      slug
    }`
    projects.value = await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
}

// Fetch data saat komponen di-mount
onBeforeMount(() => {
  fetchProjects()
})
</script>

<template>
  <div class="grid md:grid-cols-2 gap-4 w-full">
    <CardProjects
      v-for="project in projects"
      :key="project._id"
      :title="project.title"
      :description="project.description"
      :image="project.imageUrl"
      :technologies="project.technologies"
      :slug="project.slug.current"
    />
  </div>
</template>
