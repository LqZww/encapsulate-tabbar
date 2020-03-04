import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Sort = () => import('../views/sort/Sort')
const Shop = () => import('../views/shop/Shop')
const My = () => import('../views/my/My')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router