<template>
  <div>
    <h1>Register</h1>
    <input 
      type="text" 
      name="email" 
      v-model="email"
      placeholder="email"
      >
    <input 
      type="password" 
      name="password" 
      v-model="password"
      placeholder="password">
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
