const Router = require('koa-router')

const router = new Router({ prefix: '/user' })

router.post('/login', async ctx => {
  const { username, password } = ctx.request.body

  if (username === 'admin' && password === 'admin2') {
    ctx.session.user = {
      username: 'admin'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'amdin'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = router
