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
      /*
        Initialize a route object to push to router
      */
      const route = {
        name: 'songs'
      }
      if(val !== '') {
        /*
          If val is non-empty then save it inside route's query and push the route object to the router
        */
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    /*
      watches for the query value search in the route and immediate true calls the handler function for the current value even on page refresh the handler is invoked with current value
    */
    '$route.query.search': {
      immediate: true,
      handler (val) {
        /*
          sets the current value i.e. val to the search 
         */
          this.search = val
      },
    }

  }

}
</script>

