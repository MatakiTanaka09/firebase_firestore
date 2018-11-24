import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if(requiresAuth) {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                next()
            }
            else {
                next({
                    path: '/signin',
                    query: { redirect: to.fullPath }
                })
            }
        })
    }
    else {
        next()
    }
})

export default router
