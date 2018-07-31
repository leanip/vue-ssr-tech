<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs :value='filter' @changeTabValue='handleChangeTab'>
        <tab v-for='tab in stats' :key='tab' :label='tab' :index='tab'></tab>
      </tabs>
    </div>

    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="handleAdd"
    >
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
      @toggle='toggleTodoState'
    />
    <helpers
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="deleteAllCompleted"
    />
    <router-view></router-view>
  </section>
</template>

<script>
import Item from './item.vue'
import Helpers from './helper.vue'
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  metaInfo: {
    title: 'todo page'
  },
  beforeRouteEnter (to, from, next) {
    // console.log('todo before enter')
    next(vm => {
      // console.log('this is vm.id ', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('todo before update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log('todo before leave')
    next()
  },
  props: ['id'],
  data () {
    return {
      // todos: [],
      filter: 'all',
      stats: ['all', 'active', 'completed']
    }
  },
  mounted () {
    // console.log(this.id)
    this.fetchTodos()
  },
  components: {
    Item,
    Helpers
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'addTodo',
      'updateTodo',
      'deleteTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      e.target.value = ''
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    // clearAllCompleted () {
    //   this.todos = this.todos.filter(todo => !todo.completed)
    // },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.tab-container
  background-color #fff
  padding 0 15px
</style>


