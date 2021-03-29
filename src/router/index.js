import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/views/homepage.vue'
import cocktailDetails from '@/views/cocktailDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: homepage,
    component: homepage
  },
  {
    path: '/cocktailDetails',
    name: cocktailDetails,
    component: cocktailDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
