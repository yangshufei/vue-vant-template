import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/store/index.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
