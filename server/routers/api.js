const Router = require('koa-router')

const router = new Router({prefix: '/api'})

const successResponse = data => {
  return {
    success: true,
    data
  }
}

router.get('/todo', async ctx => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = router
