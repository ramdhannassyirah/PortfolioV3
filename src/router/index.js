import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ToDoList from '@/views/ToDoList.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

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
          path: '/projects',
          name: 'projects',
          component: ProjectsView,
          meta: { title: 'Projects | Ramdhan Nassyirah' },
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
