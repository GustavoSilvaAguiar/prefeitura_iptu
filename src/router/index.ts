import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authRoutes from '@/Modules/Auth/auth.routes'
import reviewRoutes from '@/Modules/Review/reviews.route'

const routes: Array<RouteRecordRaw> = [
  ...authRoutes,

  {
    path: '/',
    component: HomeView,
    meta: { breadcrumb: 'Página Inicial' },
    children: [...reviewRoutes],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
