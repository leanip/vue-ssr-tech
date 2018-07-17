import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="t1">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = h => h('div', {}, 'new render function')

// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots) // vue 插槽
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.isServer) // 用户判断是否服务端渲染

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   console.log('unwatched')
//   unWatch()
// }, 3000)

// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

app.$once('test', (a, b) => {
  console.log(`test emited ${a} ${b}`)
})

setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000)

// app.$forceUpdate()
