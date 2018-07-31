import model from '../../model/client-model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = err => {
  if (err.code === 401) {
    notify({
      content: err.msg
    })
    bus.$emit('auth')
  }
}

export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', { num: data.num })
    }, data.time)
  },
  updateSloganAsync (store, { slogan }) {
    console.log('actions slogan update: ', slogan)
    slogan += ' hahaha'
    setTimeout(() => {
      store.commit('updateSlogan', { slogan })
    }, 1000)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  login ({ commit }, {username, password}) {
    new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登录成功'
          })
          resolve()
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
