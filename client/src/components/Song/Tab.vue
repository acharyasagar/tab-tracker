<template>
  <panel title="Tabs" width="90%">
    <div slot="body">
      <p class="lead">{{ song.tab }}</p>
    </div>
  </panel>
</template>

<script>
export default {
  name: 'Tab',
  props: ['song']
}
</script>