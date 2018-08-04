<template>
  <div class="songs">
    <search-panel></search-panel>
    <songs-panel></songs-panel>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SearchPanel from './SearchPanel'
import SongsPanel from './SongsPanel'

export default {
  name: 'Songs',
  components: {
    SearchPanel,
    SongsPanel
  }
}
</script>

<style scoped>
  .songs {
    margin: 7.5rem auto;
  }
</style>

