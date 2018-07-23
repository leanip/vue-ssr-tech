import Router from 'vue-router'
import routes from './routes'

export default () => new Router({
  routes,
  mode: 'history',
  // base: '/base/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior (to, from, savedPosition) {
    // return savedPosition ? savedPosition : { x: 0, y: 0}
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  fallback: true // 如果有浏览器不支持history mode，会自动转为hash模式（#）
  // parseQuery (query) {},
  // stringifyQuery (obj) {}
})
