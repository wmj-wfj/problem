import Vue from 'vue'
import Router from 'vue-router'
import input from '@/views/input.vue' //点击按钮更改input里面的内容演示
import avatar from '@/views/avatar.vue' //更换头像 （更换为base64码格式）
import avatar1 from '@/views/avatar1.vue' //更换头像 （转化为blob格式）
import qqlogin from '@/views/qqlogin.vue' //QQ登录
import dlog from '@/views/dlog.vue' //点击显示头像
import bank from '@/views/bank.vue' //下拉刷新
import Code from '@/views/验证码倒计时.vue'//验证倒计时


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
        {
            path: '/qqlogin',
            name: 'qqlogin',
            component: qqlogin
        },
        {
            path: '/Code',
            name: 'Code',
            component: Code
        },

    ]
})