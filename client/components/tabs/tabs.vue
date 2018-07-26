<script>
  export default {
    name: 'Tabs',
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    },
    render () {
      return (
        <div class='tabs'>
          <ul class='tabs-header'>
            {this.$slots.default}
          </ul>
        </div>
      )
    }
  }
</script>

<style lang="stylus" scoped>
.tabs-header
  margin 0
  padding 0
  border-bottom 1px solid #ddd
</style>

