import Vue from 'vue'

// const component = {
//   props: [
//     'value'
//   ],
//   template: `
//     <div>
//       <input type='text' @input='handleInput' :value="value" />
//     </div>
//   `,
//   methods: {
//     handleInput (e) {
//       this.$emit('input', e.target.value)
//     }
//   }
// }

// new Vue({
//   el: '#root',
//   data () {
//     return {
//       value: '123'
//     }
//   },
//   template: `
//     <div>
//       <comp v-model='value' ></comp>
//     </div>
//   `,
//   components: {
//     Comp: component
//   }
// })

const component = {
  model: {
    prop: 'value1',
    event: 'change-test'
  },
  props: [
    'value',
    'value1'
  ],
  template: `
    <div>
      <input type='text' @input='handleInput' :value="value1" />
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change-test', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp v-model='value' ></comp>
    </div>
  `,
  components: {
    Comp: component
  }
})
