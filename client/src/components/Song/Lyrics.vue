<template>
  <panel title="Lyrics" width="90%">
    <div slot="body">
      <p class="lead"> {{ song.lyrics }} </p>
    </div>
  </panel>
</template>

<script>
export default {
  name: 'Lyrics',
  props: ['song']
}
</script>
