<template>
  <panel title="Youtube Video" width="90%">
    <div slot="body">
      <iframe :src="youtubeUrl" frameborder="0" class="video"></iframe>
    </div>
  </panel>
</template>

<script>
export default {
  name: 'Youtube',
  props: ['song'],
  data () {
    return {
    }
  },
  computed: {
    youtubeUrl () {
      return `https://www.youtube.com/embed/${this.song.youtubeId}`
    }
  }
}
</script>

<style scoped>
  iframe {
    height: 25rem;
    width: 100%;
  }
</style>

