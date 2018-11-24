import BookLists from '@/views/BookLists'
import SignIn from '@/views/SignIn'
import Select from '@/views/Select'
import MyList from '@/views/MyList'
import BookDetail from '@/views/BookDetail'

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
            path: '/select',
            name: 'Select',
            component: Select,
            meta: { requiresAuth: true }
        },
        {
            path: '/mylist',
            name: 'MyList',
            component: MyList,
            meta: { requiresAuth: true }
        },
]
