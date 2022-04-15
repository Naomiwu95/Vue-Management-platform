import Vue from 'vue'
import VueRouter from 'vue-router'


// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'Main',
        meta: { keepAlive: true },
        component:()=>import ('../views/Main.vue'),
        children:[]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/Login/login.vue')
    },
    {
        path:'/comment',
        name:'comment',
        component:()=>import('../views/comment/index.vue')
    },
    //     path:'/comment',
    //     name:'comment',
    //     component:()=>import('../views/comment/index.vue')
    // },
]
const router=new VueRouter({
    path: '/home',
    mode:'history',
    routes

})
export default router


