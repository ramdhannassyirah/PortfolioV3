import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import NotFound from '@/views/NotFound.vue'
import ContactView from '@/views/ContactView.vue'
import WorkView from '@/views/WorkView.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'

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
          path: 'about',
          name: 'about',
          component: AboutView,
          meta: { title: 'About | Ramdhan Nassyirah' },
        },
        {
          path: 'work',
          name: 'work',
          component: WorkView,
          meta: { title: 'Work | Ramdhan Nassyirah' },
        },
        {
          path: 'articles',
          name: 'Articles',
          component: ArticlesView,
          meta: { title: 'Articles | Ramdhan Nassyirah' },
        },
        {
          path: 'article/:slug',
          name: 'articleDetail',
          component: ArticleDetail,
          meta: { title: 'Article Detail | Ramdhan Nassyirah' },
        },
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsView,
          meta: { title: 'Projects | Ramdhan Nassyirah' },
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView,
          meta: { title: 'Contact | Ramdhan Nassyirah' },
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
