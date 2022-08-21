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
    path: '/Charts',
    name: 'Charts',
    // route level code-splitting
    // this generates a separate chunk (Charts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Charts.vue')
  },  {
    path: '/BestCoinsToday',
    name: 'BestCoinsToday',
    // route level code-splitting
    // this generates a separate chunk (BestCoinsToday.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BestCoinsToday" */ '../views/BestCoinsToday.vue')
  },  {
    path: '/NewListings',
    name: 'NewListings',
    // route level code-splitting
    // this generates a separate chunk (NewListings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "NewListings" */ '../views/NewListings.vue')
  },  {
    path: '/Airdrops',
    name: 'Airdrops',
    // route level code-splitting
    // this generates a separate chunk (Airdrops.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Airdrops" */ '../views/Airdrops.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
