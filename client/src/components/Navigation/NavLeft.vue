<template>
  <div class="nav-item__logo">
    <el-button round @click="navigateTo('/')">TabTracker</el-button>
  </div>
</template>

<script>
export default {
  name: 'NavLeft',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

