import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'product.list',
    component: () => import('@/views/products/List.vue')
  },
  {
    path: '/products/create',
    name: 'product.create',
    component: () => import('@/views/products/Form.vue')
  },
  {
    path: '/products/edit/:id',
    name: 'product.edit',
    component: () => import('@/views/products/UpdateForm.vue')
  },
  {
    path: '/users',
    name: 'user.list',
    component: () => import('@/views/users/List.vue')
  },
  {
    path: '/users/create',
    name: 'users.create',
    component: () => import('@/views/users/Form.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
