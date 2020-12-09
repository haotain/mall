<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   }
 }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    box-shadow: 0px -3px 10px #f6f6f6;
  }
</style>
