const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  // 服务端渲染时传入Vue-server-renderer里
  const context = { url: ctx.path }

  try {
    const appString = await renderer.renderToString(context)

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })

    ctx.body = html
  } catch (err) {
    console.log('server render err: ', err)
    throw err
  }
}
