import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
//-- Components
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Blog from '@/components/Blog'
import Faq from '@/components/Faq'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/:lang/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:lang/about-us',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/:lang/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/:lang/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/:lang/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/:lang/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/:lang/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:lang/nosotros',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/:lang/servicios',
      name: 'Services',
      component: Services
    },
    {
      path: '/:lang/productos',
      name: 'Products',
      component: Products
    },
    {
      path: '/:lang/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/:lang/preguntas-frecuentes',
      name: 'Faq',
      component: Faq
    }
  ],
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) { // if has a hash...
      return { selector: to.hash } // scroll to the element
    }
  }
})
