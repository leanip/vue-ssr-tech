<script>
  import TabContainer from './tab-container.vue'

  export default {
    name: 'Tabs',
    components: {
      TabContainer
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    },
    data () {
      return {
        panes: []
      }
    },
    methods: {
      onChange (value) {
        this.$emit('changeTabValue', value)
      }
    },
    render () {
      return (
        <div class='tabs'>
          <ul class='tabs-header'>
            {this.$slots.default}
          </ul>
          <tab-container panes={this.panes}/>
        </div>
      )
    }
  }
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>

