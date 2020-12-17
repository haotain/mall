<template>
 <div class="goods">
   <goods-list-item v-for="(item, key) in goodsList" :key="key" :goods-item="item" />
 </div>
</template>

<script>

import GoodsListItem from './GoodsListItem.vue'

 export default {
   props: {
     goodsList: {
       type: Array,
       default() {
         return []
       }
     }
   },
   data () {
     return {

     }
   },
   components: {
    GoodsListItem
   }
 }
</script>

<style scoped>
 .goods {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 5px;

 }

</style>
