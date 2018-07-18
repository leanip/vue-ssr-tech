export default {
  updateCount (state, { num }) {
    state.count = num
  },
  updateSlogan (state, payload) {
    console.log('mutations slogan update: ', payload)
    state.biaoyu = payload.slogan
  }
}
