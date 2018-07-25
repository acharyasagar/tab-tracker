<template>
  <el-row class="create-song">
    <el-col :md="12" :sm="24">
      <panel title="Song Metadata" width="90%">
        <div slot="body">
          <el-form 
          label-position="left" 
          label-width="10rem"
          :rules="rules" 
          :model="song"
          ref="form"
          class="create-song__form">
            <el-form-item label="Title:" prop="title">
              <el-input type="text" v-model="song.title"></el-input>
            </el-form-item>
            <el-form-item label="Artist:" prop="artist">
              <el-input type="text" v-model="song.artist"></el-input>
            </el-form-item>
            <el-form-item label="Genre:" prop="genre">
              <el-input type="text" v-model="song.genre"></el-input>
            </el-form-item>
            <el-form-item label="Album:" prop="album">
              <el-input type="text" v-model="song.album"></el-input>
            </el-form-item>
            <el-form-item label="Album Image:" prop="albumImage">
              <el-input type="text" v-model="song.albumImage"></el-input>
            </el-form-item>
            <el-form-item label="YouTube ID:" prop="youtubeId">
              <el-input type="text" v-model="song.youtubeId"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </panel>
    </el-col>
    <el-col :md="12" :sm="24" >
      <panel title="Song Structure" width="90%">
        <div slot="body">
          <el-form
          ref="form"
          :rules="rules" 
          :model="song"
          label-position="left" 
          label-width="9rem"
          class="create-song__form">
            <el-form-item label="Lyrics:" size="mini" prop="lyrics">
              <el-input type="textarea" v-model="song.lyrics" :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-form-item>
            <el-form-item label="Tab:" prop="tab">
              <el-input type="textarea" v-model="song.tab" :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-form-item>
            <el-button type="submit" class="btn" @click="validateForm('form')">Create Song</el-button>
          </el-form>
        </div>
      </panel>
    </el-col>
  </el-row>
</template>

<script>
import songsService from '@/services/songsService'

export default {
  name: 'CreateSong',
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      rules: {
        title: [{ required: true, message: 'Please input title', trigger: 'blur' }],
        artist: [{ required: true, message: 'Please input artist', trigger: 'blur' }],
        genre: [{ required: true, message: 'Please input genre', trigger: 'blur' }],
        album: [{ required: true, message: 'Please input album name', trigger: 'blur' }],
        albumImage: [{ required: true, message: 'Please input album image url', trigger: 'blur' }],
        youtubeId: [{ required: true, message: 'Please input youtube id', trigger: 'blur' }],
        lyrics: [{ required: true, message: 'Please input lyrics', trigger: 'blur' }],
        tab: [{ required: true, message: 'Please input tab', trigger: 'blur' }]
      }
    }
  },
  methods: {
    async validateForm (form) {
      try {
        this.$refs[form].validate((valid) => {
          if(valid) {
            songsService.post(this.song).then(response => {
              this.$router.push({
                name: 'songs'
              })
            })
          } else {
            throw new Error('Fill in form data')
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

}
</script>

<style scoped>
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .create-song {
    margin: 7.2rem auto;
  }

  .el-form-item {
    margin: 4.0rem 0;
  }
  .el-button {
    display: block;
    width: 12rem;
    margin: auto;
  }

  .el-textarea__inner {
    height: 25rem !important;
  }

</style>





