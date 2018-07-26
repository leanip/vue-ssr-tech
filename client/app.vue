<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} ---- {{count}}</p>
    <p><button @click='handleSlogan'>切换</button> slogan: {{biaoyu}}</p>
    <!-- <p><router-link to='/app/test?a=123&b=4567'>test</router-link></p> -->
    <p>
      <router-link :to='{name: "App"}'>app</router-link> |
      <router-link to='/login'>login</router-link>
    </p>
    <!-- <p><router-link to='/login/exact'>login exact</router-link></p> -->

    <transition name='fade'>
      <router-view/>
    </transition>
    <button @click='notify'>click me</button>
    <!-- <notification content='note notify'/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Charlie\'s todo list'
  },
  components: {
    Header,
    Footer
    // ,Todo
  },
  mounted () {
    // this.$notify({
    //   content: 'this $notify',
    //   btn: 'closeee'
    // })
    // console.log(this.$route)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', { num: i++ })
    // }, 1000)

    // setInterval(() => {
    //   this.updateCount({num: i++})
    // }, 1000)

    // this.updateCount({num: 123})

    // this.updateCountAsync({
    //   num: 234,
    //   time: 1000
    // })

    // console.log(this.slogan1)
  },
  methods: {
    ...mapActions(['updateCountAsync', 'updateSloganAsync']),
    ...mapMutations(['updateCount']),
    handleSlogan () {
      this.updateSloganAsync({
        slogan: '我用Vue'
      })
    },
    notify () {
      this.$notify({
        content: `this notify ${Math.random()}`,
        btn: 'close'
      })
    }
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // ...mapState(['count']),
    ...mapState(['count', 'biaoyu']),
    ...mapGetters(['fullName'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  padding-left 50px
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


