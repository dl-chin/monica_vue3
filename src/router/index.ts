import Home from "@/pages/Home.vue";
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/news',
        component: () => import('@/pages/News.vue'),
        children: [
            {
                path: 'detail',
                component: () => import('@/pages/Detail.vue'),

            }
        ],


    },
    {
        path: '/haruka/:x/:y/:z',
        name: 'haruka',
        component:  () => import('@/pages/Haruka.vue'),
        beforeEnter: () => {
            console.log('beforeEnter /haruka')

        },

    },
    {
        path: '/fiona/:x/:y/:z',
        name: 'fiona',
        component:  () => import('@/pages/Fiona.vue'),
        props: true,
        // props(route) {
        //     console.log('route', route)
        //     return route.query
        // }

    },
    {
        path: '/',
        redirect: '/home'
    }
]


const router = createRouter(
    {
        history:createWebHistory(),
        routes: routes,
    }
)


router.beforeEach((to, from, next) => {
    // to: 即将进入的目标路由
    // from: 当前导航正要离开的路由
    // next: 必须调用该方法来 resolve 这个钩子

    // 示例：检查用户是否登录
   // console.log('in->>', to, from, next)
    next()
})

router.afterEach((to, from) => {
   // console.log('out->>', to, from, next)
})

export default router;