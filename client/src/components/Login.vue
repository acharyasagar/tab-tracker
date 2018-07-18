<template>
  <div class="login">
    <h3>Enter your login credentials here:</h3>
    <el-form action="" class="login-form" >
      <el-form-item label="Email" >
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Password" >
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <div v-if="err" v-for="err in errs" v-bind:key="err">
        <el-alert :title="err" type="error"></el-alert>
        <br>
      </div>
      <el-button type="primary" @click="loginUser">Log in</el-button>
    </el-form>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      errs: null
    }
  },
  methods: {
    async loginUser () {
      try {
        const response = await authenticationService.login({ 
          email: this.email, 
          password: this.password 
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      }
      catch (err) {
        this.errs = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .login {
    margin: 10rem auto;
    width: 50%;
  }
</style>

