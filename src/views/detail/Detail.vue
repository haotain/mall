<template>
 <div>
    <detail-nav-bar></detail-nav-bar>
 </div>
</template>

<script>

import DetailNavBar from './childComponents/DetailNavBar.vue'

import {getDetail} from 'network/detail'

  export default {
    name: 'Detail',
    data () {
      return {
        id: null,

      }
    },
    created() {
      this.id = this.$route.params.id
      this.getDetail(this.id)
    },
    components: {
      DetailNavBar

    },
    methods: {
      getDetail(goodsId) {
         getDetail(this.id).then((res)=>{
           console.log(res)
         })
      }
    }
 }
</script>

<style scoped>


</style>
