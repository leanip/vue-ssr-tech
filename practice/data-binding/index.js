import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id='aa' @click='handleClick'>
  //     {{isActive ? 'active' : 'not active'}}
  //     <p v-html='html'></p>
  //   </div>
  // `,
  template: `
    <div
      :class='{ active: !isActive}'
      :class='[isActive ? "aaa" : "bbb", !isActive ? "lalal" : "leo"]'
      :class='[{setd: !isActive}, {grreen: !isActive}]'
      :style='[style1, style2]'
    >
      {{isActive ? 'active' : 'not active'}}
      <p>
        {{arr.join(' ')}}
      </p>
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    aa: 'v1',
    html: '<span>123</span>',
    arr: [1, 2, 3],
    style1: {
      'font-size': '30px'
    },
    style2: {
      color: '#f90'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join('-')
    }
  }
})
