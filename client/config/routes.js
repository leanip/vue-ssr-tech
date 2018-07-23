// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    // props: true, // true: 会把:id 作为props传递给Todo组件
    // props: { // 传一个对象
    //   id: '7890'
    // },
    props: route => ({ id: route.query.b }), // eslint-disable-line // 传一个方法
    component: () => import('../views/todo/todo.vue'),
    name: 'App',
    children: [
      {
        path: 'test',
        component: () => import('../views/login/login.vue')
      }
    ],
    beforeEnter (to, from, next) {
      console.log('app routes before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login/exact',
    component: () => import('../views/login/login.vue')
  }
]
