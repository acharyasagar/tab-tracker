<template>
  <panel title="Songs" width="80vw">
    <div slot="body">
      <div v-for="song in songs" :key="song.id" class="song-list">
        <el-row :gutter="20" class="song-list__item">
          <el-col :span="18" class="song-metadata">
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
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">
                  View More
              </el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <img :src="song.albumImage" class="album-image" alt="Album Image">
            <br>
            <div class="song-album">
              {{ song.album }}
            </div>
          </el-col>
        </el-row>
      </div>
      <button class="icon" @click="navigateTo('songs/new')">
        <svg width="4rem" height="4rem"> 
          <circle 
            class="plus-icon"
            cx="20" 
            cy="20" 
            r="19" 
            fill="#eff0f2"
            stroke="#fff" 
            stroke-width="2" 
          />
          <line
            x1="20" 
            y1="10" 
            x2="20" 
            y2="30" 
            stroke="rgb(15, 124, 198)"
            stroke-width= "2"
          />
          <line
            x1="10" 
            y1="20" 
            x2="30" 
            y2="20" 
            stroke="rgb(15, 124, 198)"
            stroke-width= "2"
          />
        </svg>
      </button>
    </div>
  </panel>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SongsPanel',
    computed: {
    ...mapState(['_song']),
    songs() {
      return this._song.songs
    }
  },
  methods: {
    ...mapActions(['getSongs']),
    navigateTo (route) {
      this.$router.push({
        name: route.name || route,
        params:  route.params || {}
      })
    }
  },
  watch: {
    /* 
      Watch the router query's search property and whenever it changes perform a new getsongs request which requests songs to server and udates the songs state 
    */
    '$route.query.search': {
      /*
        immediate true invokes the handler for the current value also, hence the handler is invoked on every page refresh 
      */
      immediate: true,
      async handler (val) {
        this.getSongs(val)
      }
    }
  }
}
</script>


<style scoped>
  .icon {
      display: block;
      height: 4rem;
      width: 4rem;
      position: relative;
      border: 0;
      background: #eff0f2;
      border-radius: 50%;
      left: 97%;
      top: 6.4rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    .icon:focus {
      outline: none;
    }
    .icon:hover {
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .song-list__item {
      overflow: hidden;
      box-sizing: border-box;
      height: 20rem;
      margin-bottom: 0.5rem;
      background: rgba(242, 243, 244, 0.8);
      padding: 1rem;
    }
    .el-row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .song-metadata {
      height: 95%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
      margin: 0 auto;
      width: auto;
      height: 15rem;
    }
</style>

