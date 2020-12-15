<template>
  <!-- <div class="tab-bar-item"  v-on:click="tabBarItemClick"> -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else> <slot name="item-icon-active"></slot></div>
    <div :style="activeStyle "><slot name="item-text"></slot></div>
  </div>
</template>

<script>
 export default {
   props: {
     path : {
       type : String
     },
     activeColor : {
       type : String,
       default : 'red'
     }
   },
   data () {
     return {

     }
   },
   computed: {
     isActive() {
        return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle() {
       return this.isActive ? {color : this.activeColor} : {}
     }
   },
   components: {

   },
   methods: {
     itemClick () {
       this.$router.replace(this.path)
     }
   }

 }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size : 13px;
  }
  .tab-bar-item img {
    width: 23px;
  }
  .active {
    color: red;
  }
</style>
