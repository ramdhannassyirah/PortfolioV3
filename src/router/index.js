import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFound from '@/views/NotFound.vue'
import BlogDetails from '@/components/BlogDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: { title: 'Ramdhan Nassyirah' },
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView,
          meta: { title: 'About | Ramdhan Nassyirah' },
        },
        {
          path: '/blog',
          name: 'blog',
          component: BlogView,
          meta: { title: 'Blog | Ramdhan Nassyirah' },
        },
        {
          path: '/blog/:slug',
          name: 'blogDetails',
          component: BlogDetails,
          meta: { title: 'Blog Detail | Ramdhan Nassyirah' },
        },
        {
          path: '/projects',
          name: 'projects',
          component: ProjectsView,
          meta: { title: 'Projects | Ramdhan Nassyirah' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

router.afterEach((to) => {
  const defaultTitle = 'Ramdhan Nassyirah'
  document.title = to.meta.title || defaultTitle
})

export default router
