<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  #app {
    margin-top: 2.4rem;
  }

</style>
