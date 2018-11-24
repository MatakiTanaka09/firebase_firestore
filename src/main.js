// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
