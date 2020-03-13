import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopMall from '@/views/shopmall'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopMall',
    component: ShopMall
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
