import Vue from 'vue'
import Router from 'vue-router'
//-- Components
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Blog from '@/components/Blog'
import Faq from '@/components/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})
