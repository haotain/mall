<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:conten>购物街</template></nav-bar>
    <scroll class="wrapper" ref="scroll"
      :probe-type="3"
      @scrollPosition="scrollPosition"
      :pull-upLoad="true"
      @getData="getData"
      >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature-view></home-feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods-list="goods[cid].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTopShow"></back-top>
  </div>

</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'


  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeatureView from './childComponents/HomeFeatureView'

  import {getHomeMultidata, getHomeGoodsdata} from "network/home.js"

  export default {
    name : 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop

    },
    data() {
      return {
        banners : [],
        recommends : [],
        goods: {
          2: {page : 0, list : []},
          50: {page : 0, list : []},
          5: {page : 0, list : []}
        },
        cid: 2,
        isBackTopShow: false
      }
    },
    created() {
      this.getHomeMultidata()
    },
    mounted() {
      this.getHomeGoodsdata(2)
      this.getHomeGoodsdata(50)
      this.getHomeGoodsdata(5)
    },
    methods: {
       getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsdata(type, page).then(res => {
           this.goods[type].list.push(...res.list)
           this.goods[type].page += 1
           this.$nextTick(() => {
           this.$refs.scroll.scroll.refresh()
           this.$refs.scroll.scroll.finishPullUp()
           })
        })
      },

      tabClick(index) {
        switch(index) {
          case 0:
            this.cid = 2
            break;
          case 1:
            this.cid = 50
            break;
          case 2:
            this.cid = 5
            break;
        }
      },
      backTopClick() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      scrollPosition(position) {
        this.isBackTopShow = (-position.y) > 500
      },
      getData() {
        console.log(11)
        this.getHomeGoodsdata(this.cid)
      }
    }
  }

</script>

<style scoped>
  #home {
    height: 100vh;
    overflow: hidden;
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
  .tab-control {
   position: sticky;
   top: 44px;
   z-index: 2;
  }
  .wrapper {
    height: calc(100% - 93px);
    margin-top: 44px;
  }

</style>
