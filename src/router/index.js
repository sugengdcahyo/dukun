import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Analyze from '@/views/analyze/index.vue'
import Benchmark from '@/views/benchmark/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Exchange from '@/views/exchange/index.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/analyze/:bcc/:scc',
    name: 'Analyze',
    component: Analyze
  },
  {
    path: '/benchmark',
    name: 'Benchmark',
    component: Benchmark
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
