import Vue from 'vue'
import Router from 'vue-router'
import input from '@/views/input.vue'
import avatar from '@/views/avatar.vue'
import avatar1 from '@/views/avatar1.vue'

import dlog from '@/views/dlog.vue'
import bank from '@/views/bank.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'input',
            component: input
        },
        {
            path: '/avatar',
            name: 'avatar',
            component: avatar
        },
        {
            path: '/avatar1',
            name: 'avatar1',
            component: avatar1
        },
        {
            path: '/dlog',
            name: 'dlog',
            component: dlog
        },
        {
            path: '/bank',
            name: 'bank',
            component: bank
        },

    ]
})