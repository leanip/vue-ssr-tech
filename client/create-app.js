import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import CreateStore from './store/store'
import CreateRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

export default () => {
  const router = new CreateRouter()
  const store = new CreateStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {app, router, store}
}
