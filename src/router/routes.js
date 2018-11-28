import BookLists from '@/pages/BookLists'
import BookDetail from '@/pages/BookDetail'
import MyList from '@/pages/MyList'
import MyCart from '@/pages/MyCart'
import SignIn from '@/pages/SignIn'

export default [
        {
            path: '*',
            redirect: 'signin'
        },
        {
            path: '/',
            redirect: 'signin'
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
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
            path: '/mycart',
            name: 'MyCart',
            component: MyCart,
            meta: { requiresAuth: true }
        },
]
