import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Gunakan variabel lingkungan
  dataset: import.meta.env.VITE_SANITY_DATASET, // Gunakan variabel lingkungan
  apiVersion: '2025-01-02',
  useCdn: true, // Gunakan CDN untuk read-only
})

export default sanityClient
