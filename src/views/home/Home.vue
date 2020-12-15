<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:conten>
        购物街
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import HomeSwiper from './childComponents/HomeSwiper'

  import {getHomeMultidata} from "network/home.js"

  export default {
    name : 'Home',
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners : []
      }
    },
    created() {
       this.getHomeMultidata()
      // getHomeMultidata().then(res => {
      //   console.log(123,res.data.banner)
      //   this.banners = res.data.banner.list
      // })
    },
    methods: {
       getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log( res.data.banner.list)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    }
  }

</script>

<style>
  .home-nav {
    background-color: red;
    color: seashell;
  }
</style>
