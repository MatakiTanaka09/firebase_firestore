import BookLists from '@/pages/BookLists'
import BookDetail from '@/pages/BookDetail'
import MyList from '@/pages/MyList'
import Cart from '@/pages/Cart'
import StartApp from '@/pages/StartApp'

export default [
        {
            path: '*',
            redirect: 'startapp'
        },
        {
            path: '/',
            redirect: 'startapp'
        },
        {
            path: '/startapp',
            name: 'StartApp',
            component: StartApp
        },
        {
            path: '/booklists',
            name: 'BookLists',
            component: BookLists,
            meta: { requiresAuth: true }
        },
        {
            path: '/booklists/:id',
            name: 'BookDetail',
            component: BookDetail,
            props: route => ({
                id: Number(route.params.id)
            }),
            meta: { requiresAuth: true }
        },
        {
            path: '/mylist',
            name: 'MyList',
            component: MyList,
            meta: { requiresAuth: true }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta: { requiresAuth: true }
        },
        // {
        //     path: '/cart/:uid',
        //     name: 'MyCart',
        //     component: Cart,
        //     props: route => ({
        //         uid: Number(route.params.uid)
        //     }),
        //     meta: { requiresAuth: true }
        // },
]
