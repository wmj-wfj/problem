import Vue from 'vue'
import Router from 'vue-router'
import input from '@/views/input.vue'
import cta from '@/views/cta.vue'
import dlog from '@/views/dlog.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'input',
      component: input
    },
    {
      path: '/cta',
      name: 'cta',
      component: cta
    },
    {
      path: '/dlog',
      name: 'dlog',
      component: dlog
    },
  ]
})
