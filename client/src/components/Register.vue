<template>
  <div>
    <h1>Register</h1>
    <div class="register-form">
      <el-form>
        <el-form-item label="Email">
          <el-input v-model="email" ></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="password" type="password" ></el-input>
        </el-form-item>
        <div v-if="err" v-for="err in errs" v-bind:key="err">
          <el-alert :title="err" type="error"></el-alert>
          <br>
        </div>
        <el-button @click="registerUser">Register</el-button>
      </el-form>
    </div>
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
      } catch (err) {
        this.errs = err.response.data.error
      } 
    }
  }
}
</script>
<style scoped>
  .register-form {
    max-width: 60%;
    margin: 0.5rem auto;
  }
</style>



