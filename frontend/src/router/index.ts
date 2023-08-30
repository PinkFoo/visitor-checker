import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/report',
    name: 'visitorReport',
    props: true,
    component: () => import('../views/VisitorReport.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
