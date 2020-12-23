<template>
 <div class="list-item" @click="itemClick">
   <img :src="goodsItem.fid"  @load="imgLoad">
   <div list-item-info>
     <p>{{goodsItem.title}}</p>
     <p>{{goodsItem.product_title}}</p>
     <span>{{goodsItem.price}}</span>
   </div>
 </div>
</template>

<script>
 export default {
   props: {
     goodsItem: {
       type: Object,
       default() {
         return {}
       }
     }
   },
   data () {
     return {

     }
   },
   computed: {
     title() {
       return this.goodsItem.title + ' '+ this.goodsItem.product_title
     }
   },
   components: {

   },
   methods: {
      imgLoad() {
       this.$bus.$emit('imageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.goods_id)
      }
   }
 }
</script>

<style scoped>
 .list-item {
   width: 45%;
   font-size: 12px;
 }
 .list-item img{
   width: 100%;
 }
 .list-item-info {
   padding: 15px;
 }
</style>
