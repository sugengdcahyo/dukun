import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Analyze from '@/views/Analyze.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Exchange from '@/views/exchange/index.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Analyze
  },
  {
    path: '/exchange/:bcc/:scc',
    name: 'DetailExchange',
    component: Exchange
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
