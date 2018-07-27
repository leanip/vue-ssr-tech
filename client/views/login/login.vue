<template>
  <div class="login">
    <form class="login-form" @submit="doSubmit">
      <h1>
        <span>Login</span>
        <span v-show='errorMsg' class='login-error'>{{errorMsg}}</span>
      </h1>
      <input
        type="text"
        v-model="username"
        placeholder="User Name"
        class="login-input"
      >
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="login-input"
      >
      <button class='login-btn'>登录</button>
    </form>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'login page'
    },
    data () {
      return {
        username: '',
        password: '',
        errorMsg: ''
      }
    },
    methods: {
      doSubmit (e) {
        e.preventDefault()
        if (this.validate()) {
          // login
        }
      },
      validate () {
        if (!this.username.trim()) {
          this.errorMsg = '请输入用户名'
          return false
        }
        if (!this.password.trim()) {
          this.errorMsg = '请输入密码'
          return false
        }
        this.errorMsg = ''
        return true
      }
    }
  }
</script>

<style lang='stylus' scoped>
.login
  max-width 300px
  padding 20px 25px
  margin 30px auto
  background-color #fff

  .login-error
    margin-left 10px
    font-size 14px
    font-weight normal
    color #f40

  .login-form
    position relative
    display block

  .login-input
    width 100%
    margin-top 15px
    padding 8px 10px
    border 1px solid #999
    border-radius 3px
    box-sizing border-box

  .login-btn
    width 100%
    margin-top 15px
    padding 8px
    color #fff
    border none
    border-radius 3px
    background-color #38a38a
    cursor pointer
</style>
