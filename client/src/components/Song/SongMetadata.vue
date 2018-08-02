<template>
  <panel title="Song Metadata" width="90%">
    <div slot="body">
      <el-row :gutter="20">
          <el-col :span="16" class="song-metadata">
            <div class="song-title">
              {{ song.title }}
            </div>
            <div class="song-artist">
              {{ song.artist }}
            </div>
            <div class="song-genre">
              {{ song.genre }}
            </div>
            <div>
              <el-button 
                type="primary" 
                size="medium"
                @click="navigateTo({
                  name: 'song-edit',
                  params: {
                    songId: song.id
                  }
                })">
                  Edit
              </el-button>
            </div>
          </el-col>
        <el-col :span="8">
          <img :src="song.albumImage" class="album-image" alt="Album Image">
          <br>
          <div class="song-album">
            {{ song.album }}
          </div>
        </el-col>
      </el-row>
    </div>
  </panel>
</template>

<script>
export default {
  name: 'SongMetadata',
  props: ['song'],
  methods: {
    navigateTo (route) {
      this.$router.push({
        name: route.name || route,
        params:  route.params || {}
      })
    }
  }
}
</script>

<style scoped>
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 25rem;
  }
.song-metadata {
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .song-title {
    font-size: 3rem;
  }

  .song-artist {
    font-size: 2.4rem;
  }
  .song-album, .song-genre {
    font-size: 1.8rem;
  }
  .song-album {
    text-align: center;
  }

  .album-image {
    display: block;
    width: auto;
    height: 15rem;
    margin: 0 auto;
  }
</style>


