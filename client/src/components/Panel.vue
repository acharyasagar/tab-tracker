<template>
  <el-card class="box-card" :style="boxCard">
    <div class="clearfix">
      <h3>{{title}}</h3>
    </div>
   <slot name="body"></slot>
  </el-card> 
</template>

<script>
export default {
  name: 'panel',
  props: ['title', 'width'],
  data () {
    return {
      boxCard: {
        width: this.width
      }
    }
  }
}
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    height: 100%;
    padding: 0 2rem 5.6rem 2rem;;
    margin: 1rem auto;
  }
  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
</style>




