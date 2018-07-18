<template>
  <div class="register-form">
    <el-form>
      <h3>Register yourself from here :</h3>
      <el-form-item label="Email">
        <el-input v-model="email" ></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password" ></el-input>
      </el-form-item>
      <div  v-if="errs.length" v-for="err in errs"  v-bind:key="err">
        <el-alert :title="err" type="error"></el-alert>
        <br>
      </div>
      <el-button @click="registerUser">Register</el-button>
    </el-form>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      errs: null
    }
  },
  methods: {
    async registerUser () {
      try {
        const response = await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

      } catch (err) {
        this.errs = err.response.data.error
      } 
    }
  }
}
</script>
<style scoped>
  .register-form {
    max-width: 50%;
    margin: 10rem auto;
  }
</style>



