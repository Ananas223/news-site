import Vue from 'vue'
import VueRouter from 'vue-router'
import RusNews from '../views/Rus.vue'
import UsNews from '../views/Us.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RusNews
  },
  {
    path: '/ru',
    component: RusNews
  },
  {
    path: '/us',
    component: UsNews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
