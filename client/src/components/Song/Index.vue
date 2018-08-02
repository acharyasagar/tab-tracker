<template>
  <div v-if="song">
    <el-row  style="margin: 3.2rem auto">
      <el-col :md="12" :sm="24">
        <song-metadata :song="song"></song-metadata>
      </el-col>
      <el-col :md="12" :sm="24" gutter="20">
        <youtube :song="song"> </youtube>
      </el-col>
    </el-row>
    <el-row style="margin: auto">
      <el-col :md="12" :sm="24">
        <lyrics :song="song"></lyrics>
      </el-col>
      <el-col :md="12" :sm="24" gutter="20">
        <tab :song="song"> </tab>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube' 
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  name: 'Song',
  components: { SongMetadata, Youtube, Lyrics, Tab },
  computed: {
    ...mapState(['_song']),
    song() {
      return this._song.song
    }
  },
  methods: {
    ...mapActions(['getSongById'])
  },
  beforeMount () {
    this.getSongById(this.$route.params.songId)
  }
}
</script>

<style scoped>
  .el-col {
    height: 40rem;
    margin: 0.8rem auto;
  }
  
</style>


