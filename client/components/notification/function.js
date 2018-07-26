import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = [] // 已经创建的组件列表
let seed = 1 // 生成组件的id，方便后期组件的删除

const removeInstance = instance => {
  if (!instance) return

  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instances.splice(index, 1)

  if (len <= 1) return

  const removeHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = instances[i].verticalOffset - removeHeight - 16
  }
}

const notify = options => {
  // 涉及到DOM操作，不能在服务端操作
  if (Vue.prototype.$isServer) return

  const {
    autoClose,
    ...rest
  } = options

  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  instance.vm.visible = true
  document.body.appendChild(instance.vm.$el)

  // 计算高度
  let verticalOffset = 0

  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })

  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  instances.push(instance)

  instance.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  instance.$on('close', () => {
    instance.vm.visible = false
  })

  return instance.vm
}

export default notify
