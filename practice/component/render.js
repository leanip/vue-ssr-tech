import Vue from 'vue'

const component = {
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  props: ['props1'],
  data () {
    return {
      style: {
        width: '90%',
        height: '200px',
        margin: '100px auto',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  },
  render (h) {
    return h(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => {
        //     this.$emit('click')
        //   }
        // }
      },
      [
        h('h1', {}, this.props1),
        // this.$slots.default,
        this.$slots.header
      ]
    )
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span ref="span">{{value}}</span>
      </comp-one>
    </div>
  `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // }
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'p',
          {
            ref: 'span',
            slot: 'header',
            // domProps: {
            //   innerHTML: '<p>hahaha</p>'
            // }
            attrs: {
              id: 'test-id'
            }
          },
          this.value
        )
      ]
    )
  }
})
