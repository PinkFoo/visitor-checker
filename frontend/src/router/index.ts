import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/visitor/:id',
    name: 'visitorDetails',
    props: true,
    component: () => import('../views/VisitorDetails.vue')
  },
  {
    path: '/edit/:id',
    name: 'editVisitor',
    props: true,
    component: () => import('../views/EditVisitor.vue')
  },

  {
    path: '/add',
    name: 'newVisitor',
    props: true,
    component: () => import('../views/NewVisitor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })
