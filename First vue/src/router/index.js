import { createRouter, createWebHistory } from 'vue-router'
import GameList from '../views/GameList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // template created by vite
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },

    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/',
      name: 'GameList',
      component: GameList
    },

    
  ]
})

export default router
