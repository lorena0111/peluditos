import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/registro',
    name: 'Registro',
  
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },

  {
    path: '/usuario',
    name: 'Usuario',
  
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  },
  {
    path: '/adopciones',
    name: 'Adopcioness',
  
    component: () => import(/* webpackChunkName: "adopciones" */ '../views/Adopciones.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
