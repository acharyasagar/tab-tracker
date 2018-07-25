<template>
  <div class="nav">
    <div class="nav-item nav-item__left">
      <a @click="navigateTo('/')">
      <img src="./../../assets/logo.png" alt="Logo">
    </a>
    <a class="browse-btn" :class="isActive ? 'active': ''" @click="navigateTo('songs')">Browse</a>
    </div>
    <nav-right class="nav-item nav-item__right"></nav-right>
  </div>
</template>

<script>
import NavRight from './NavRight'
import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  components: { NavRight },
  computed: {
    ...mapState(['route']),
    isActive () {
      return this.route.fullPath === '/songs'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push({
        name: route
      })
    }
  }
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
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .browse-btn {
    color: rgb(15, 124, 198);
    padding: 0.8rem 1.2rem 0.4rem 1.2rem;
    border: none;
    background: #fff;
    font-family: 'Dosis', sans-serif;
    box-sizing: border-box;
    height: 4.4rem;
    font-size: 1.6rem;
  }
  .browse-btn:hover, .active {
    border-bottom: 2px solid rgb(15, 124, 198);
  }
</style>

