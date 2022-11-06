import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        { path: '/about', component: HomeView},
        { path: '/contact', component: HomeView},
      ]
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   redirect: "/",
    // },
    {
      path: '/portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/blog',
      component: () => import('../views/BlogView.vue')
    },

  ]
})

export default router
