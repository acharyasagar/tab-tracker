<template>
  <div class="nav">
    <nav-left class="nav-item nav-item__left"></nav-left>
    <nav-right class="nav-item nav-item__right"></nav-right>
  </div>
</template>

<script>
import NavRight from './NavRight'
import NavLeft from './NavLeft'

export default {
  name: 'NavBar',
  components: { NavRight, NavLeft }
}
</script>


<style scoped>
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
  }

  .nav-item {
    flex-basis: 50%;
    padding: 0 16px;
  }

  .nav-item__right {
    text-align: right;
  }

  .nav-item__left {
    text-align: left;
  }
</style>

