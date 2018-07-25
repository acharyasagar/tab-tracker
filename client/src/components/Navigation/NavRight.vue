<template>
  <div class="nav-right">
    <el-button 
      v-if="!isAuthenticated"
      id="login-btn" 
      type="primary" 
      plain
      @click="navigateTo('login')"> 
        Log in 
    </el-button>
    <el-button 
      v-if="!isAuthenticated"
      id="signup-btn"
      type="primary" 
      plain 
      @click="navigateTo('register')">
        Sign up
    </el-button>
    <el-button 
      v-if="isAuthenticated"
      id="logout-btn"
      type="primary" 
      @click="logout"
      plain>
        Log out
    </el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavRight',
  computed: {
    ...mapState(['auth']),
    isAuthenticated() {
      return this.auth.isAuthenticated
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push({
        name: route
      })
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>




