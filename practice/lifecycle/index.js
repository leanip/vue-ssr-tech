// vue 生命周期
import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeActivate () {
    console.log('beforeActivate')
  },
  activated () {
    console.log('activated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  // render (h) {
  //   throw new TypeError('render error')
  //   // console.log('render function invoked')
  //   // return h('div', {}, this.text)
  // },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且在正式环境可以使用
  }
})

setInterval(() => {
  app.text += 1
}, 1000)

setTimeout(() => {
  app.$destroy()
}, 2000)
