import model from '../../model/client-model'

const handleError = err => {
  console.log(err)
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
  }
}
