<template>
  <el-row class="create-song" v-if="itemToEdit">
    <el-col :md="12" :sm="24">
      <panel title="Song Metadata" width="90%">
        <div slot="body">
          <el-form 
          label-position="left" 
          label-width="10rem"
          :rules="rules" 
          :model="itemToEdit"
          ref="form"
          class="create-song__form">
            <el-form-item label="Title:" prop="title">
              <el-input type="text" v-model="itemToEdit.title"></el-input>
            </el-form-item>
            <el-form-item label="Artist:" prop="artist">
              <el-input type="text" v-model="itemToEdit.artist"></el-input>
            </el-form-item>
            <el-form-item label="Genre:" prop="genre">
              <el-input type="text" v-model="itemToEdit.genre"></el-input>
            </el-form-item>
            <el-form-item label="Album:" prop="album">
              <el-input type="text" v-model="itemToEdit.album"></el-input>
            </el-form-item>
            <el-form-item label="Album Image:" prop="albumImage">
              <el-input type="text" v-model="itemToEdit.albumImage"></el-input>
            </el-form-item>
            <el-form-item label="YouTube ID:" prop="youtubeId">
              <el-input type="text" v-model="itemToEdit.youtubeId"></el-input>
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
          :model="itemToEdit"
          label-position="left" 
          label-width="9rem"
          class="create-song__form">
            <el-form-item label="Lyrics:" size="mini" prop="lyrics">
              <el-input type="textarea" v-model="itemToEdit.lyrics" :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-form-item>
            <el-form-item label="Tab:" prop="tab">
              <el-input type="textarea" v-model="itemToEdit.tab" :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-form-item>
            <el-button type="submit" class="btn" @click="validateForm('form')">Save Song</el-button>
          </el-form>
        </div>
      </panel>
    </el-col>
  </el-row>
</template>

<script>
import songsService from '@/services/songsService'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CreateSong',
  data () {
    return {
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
  computed: {
    ...mapState(['_song']),
    itemToEdit () {
      return Object.assign({}, this._song.song)
    },
    songId () {
      return this.$route.params.songId
    }
  },
  methods: {
    ...mapActions(['getSongById', 'editSong']),
    async validateForm (form) {
      try {
        this.$refs[form].validate((valid) => {
          if(valid) {
            this.editSong({
              songId: this.songId,
              data: this.itemToEdit
            })
            this.$router.go(-1)
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





