<template>
 <div class="recommend">
    <div class="recommend-item" v-for="(item, key) in recommends" :key="key">
      <a :href="item.link">
         <img :src="item.image" />
         <div>{{item.title}}</div>
      </a>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'HomeRecommend',
   props: {
     recommends: {
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

   }
 }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee
  }
  .recommend-item {
     flex: 1;
     width: 20%;
  }

  .recommend-item a {
    text-decoration:none;
    color: #666666;
  }
  .recommend-item img{
    width: 80%;
    /* width: 80px;
    height: 80px; */
    margin-bottom: 8px;
  }

</style>
