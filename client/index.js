import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'
import CreateRouter from './config/router'

Vue.use(VueRouter)

const router = new CreateRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
