// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store/store'
import Firebase from './api/firebase/firebase'
import Firestore from './api/firebase/firestore'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//
Vue.config.productionTip = false

//
Vue.use(BootstrapVue)
sync(store, router)

// apply firebase & firestore to application
Firebase.init()
Firestore.init()

// Vue instance
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
