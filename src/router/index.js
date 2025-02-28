import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ToDoList from '@/views/ToDoList.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
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
        {
          path: '/projects/:slug',
          name: 'projectDetails',
          component: ProjectDetails,
          meta: { title: 'Projects Detail | Ramdhan Nassyirah' },
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactView,
          meta: { title: 'Contact | Ramdhan Nassyirah' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // Vue Router 4 (untuk Vue 3)
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDoList,
    },
  ],
})

router.afterEach((to) => {
  const defaultTitle = 'Ramdhan Nassyirah' // Default jika meta title tidak ada
  document.title = to.meta.title || defaultTitle
})

export default router
