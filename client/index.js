import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import CreateRouter from './config/router'
import CreateStore from './store/store'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new CreateRouter()
const store = new CreateStore()

router.beforeEach((to, from, next) => {
  console.log('router before')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('router before resolve')
  next()
})

router.afterEach((to, from) => {
  console.log('router after')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
