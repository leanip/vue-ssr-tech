import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // props: true, // true: 会把:id 作为props传递给Todo组件
    // props: { // 传一个对象
    //   id: '7890'
    // },
    props: route => ({ id: route.query.b }), // eslint-disable-line // 传一个方法
    component: Todo,
    name: 'App',
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login/exact',
    component: Login
  }
]
