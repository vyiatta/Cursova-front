import HomeView from '@/views/HomeView.vue'
import Price from '@/views/PriceView.vue'
import About from '@/views/AboutView.vue'
import Privacy from '@/views/PrivacyPolicy.vue'
import Register from '@/views/Auth/Register.vue'
import Login from '@/views/Auth/Login.vue'
import ResetPass from '@/views/Auth/ResetPass.vue'
import ConfirmReset from '../views/Auth/confirmreset.vue'


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Main pages
    {
      path: '/',
      name: 'Home page',
      component: HomeView
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // For home Смотри
    {
      path: '/upholstery-cleaning',
      name: 'Upholstery Cleaning',
      component: () => import('@/views/ForHome/UpholsteryCleaning.vue')
    },
    {
      path: '/leather-cleaning',
      name: 'Leather Cleaning',
      component: () => import('@/views/ForHome/LeatherCleaning.vue')
    },
    {
      path: '/mattress-cleaning',
      name: 'Mattress Cleaning',
      component: () => import('@/views/ForHome/MattressCleaning.vue')
    },
    {
      path: '/carpet-cleaning',
      name: 'Carpet Cleaning',
      component: () => import('@/views/ForHome/CarpetCleaning.vue')
    },
    {
      path: '/rug-cleaning',
      name: 'Rug cleaning',
      component: () => import('@/views/ForHome/RugCleaning.vue')
    },
    {
      path: '/curtain-and-blind-cleaning',
      name: 'Curtain and blind cleaning',
      component: () => import('@/views/ForHome/CurtainsCleaning.vue')
    },
    {
      path: '/hall-and-stairs',
      name: 'Hall and Stairs',
      component: () => import('@/views/ForHome/HallStairs.vue')
    },
    // Commercial
    {
      path: '/commercial',
      name: 'For Commercial',
      component: () => import('@/views/ForCommercial.vue')
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: () => import('@/views/ContactsView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Auth/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Auth/Register.vue')
    },
    {
      path: '/resetpassword',
      name: 'Reset password',
      component: () => import('../views/Auth/ResetPass.vue')
    },
    {
      path: '/confirmreset',
      name: 'Confirm reset',
      component: () => import('../views/Auth/confirmreset.vue')
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
  ]
})

export default router