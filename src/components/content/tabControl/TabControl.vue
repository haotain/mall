<template>
 <div class="tab-control">
    <div v-for="(item, key) in titles" :key="key" class="tab-control-item"  :class="{active: key == currentIndex}" @click="editIndex(key)">
      <span>{{item}}</span>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'TabControl',
   props: {
     titles: {
       type: Array,
       default() {
         return []
       }
     }
   },
   data () {
     return {
       currentIndex: 0
     }
   },
   components: {

   },
   methods: {
     editIndex(index) {
       this.currentIndex = index
       this.$emit('tabClick', index);
     }
   }

 }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: rgb(204, 64, 87);
  }
  .active span {
    border-bottom: 3px solid rgb(204, 64, 87);
    padding: 5px;
  }
</style>
