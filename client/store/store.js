import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      updateCount (state, count) {
        state.count = count
      }
    }
  })
}
