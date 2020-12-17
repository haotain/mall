<template>
 <div class="nav-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="content">
    <slot name="conten">aaaa</slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    flex-direction: row;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left, .right {
    width: 60px;
  }
  .content {
    flex: 1;
  }

</style>

