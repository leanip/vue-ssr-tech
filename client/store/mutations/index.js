export default {
  updateCount (state, { num }) {
    state.count = num
  },
  updateSlogan (state, payload) {
    console.log('mutations slogan update: ', payload)
    state.biaoyu = payload.slogan
  },
  fillTodos (state, todos) {
    state.todos = todos
  },
  addTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, { id, todo }) {
    console.log('update mutation: ', id, todo)
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1,
      todo
    )
  },
  deleteTodo (state, id) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1
    )
  },
  deleteAllCompleted (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  doLogin (state, userInfo) {
    state.userInfo = userInfo
  },
  startLoading (state) {
    state.loading = true
  },
  endLoading (state) {
    state.loading = false
  }
}
