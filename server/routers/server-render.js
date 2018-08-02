const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  // 服务端渲染时传入Vue-server-renderer里
  const context = { url: ctx.path, user: ctx.session.user }

  try {
    const appString = await renderer.renderToString(context)

    const { title } = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text(),
      initialState: context.renderState()
    })

    ctx.body = html
  } catch (err) {
    console.log('server render err: ', err)
    throw err
  }
}
