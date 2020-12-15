<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:conten>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends" />
    <home-feature-view></home-feature-view>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeatureView from './childComponents/HomeFeatureView'

  import {getHomeMultidata} from "network/home.js"

  export default {
    name : 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView

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
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: red;
    color: seashell;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
</style>
