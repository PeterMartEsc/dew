import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import LoginView from '@/components/LoginView.vue'
import RegisterView from '@/components/RegisterView.vue'
import HijoComponent from '@/components/HijoComponent.vue'
import PadreComponent from '@/components/PadreComponent.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/hijo', name: 'hijo', component: HijoComponent },
  { path: '/padre', name: 'padre', component: PadreComponent },

  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
