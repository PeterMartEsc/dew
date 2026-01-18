import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/navigation/Home.vue'
import AboutMe from '@/navigation/AboutMe.vue'
import Proyectos from '@/navigation/Proyectos.vue'
import Habilidades from '@/navigation/Habilidades.vue'
import Experiencia from '@/navigation/Experiencia.vue'
import Contacto from '@/navigation/Contacto.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/', component: AboutMe },
  { path: '/proyectos', component: Proyectos },
  { path: '/habilidades', component: Habilidades },
  { path: '/experiencia', component: Experiencia },
  { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
