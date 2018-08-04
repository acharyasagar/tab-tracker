<template>
  <panel title="Search Songs" width="80vw">
    <div slot="body">
      <el-input placeholder="Please type song title, artist, genre, album " v-model="search">
      </el-input>
    </div>
  </panel>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SongsPanel',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getSongs'])
  },
  watch: {
    search (val) {
      this.$router.push({
        path: '/songs',
        query: {
          search: val
        }
      })
      setInterval(this.getSongs(this.$route.fullPath), 500)
    }
  }

}
</script>

