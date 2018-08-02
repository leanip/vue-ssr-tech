import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }

      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({
            route: router.currentRoute,
            store
          })
        }
      })).then(() => {
        console.log(store.state.todos)
        context.meta = app.$meta()
        resolve(app)
      })
    })
  })
}
