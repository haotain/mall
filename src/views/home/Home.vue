<template>
  <div id="home">

    <nav-bar class="home-nav">
      <template v-slot:conten>
        购物街
      </template>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isShowTab"
      ref="tabControl1"
    ></tab-control>

    <scroll class="wrapper" ref="scroll"
      :probe-type="3"
      @scrollPosition="scrollPosition"
      :pull-upLoad="true"
      @getData="getData">

      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>

      <home-recommend :recommends="recommends" />
      <home-feature-view></home-feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>

      <goods-list :goods-list="goods[cid].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTopShow"></back-top>
    <toast></toast>
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

  import {debounce} from "common/util"



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
      BackTop,


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
        cid: 50,
        isBackTopShow: false,
        tabOfsetTop : 0,
        isShowTab: false,
        saveScrollY: 0

      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveScrollY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveScrollY = this.$refs.scroll.scroll.y
    },
    created() {
      this.getHomeMultidata()
      // this.getHomeGoodsdata(50)
      // this.getHomeGoodsdata(2)
      // this.getHomeGoodsdata(5)
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('imageLoad', () => {
        refresh()
      })
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
             this.$refs.scroll.refresh()
           this.$refs.scroll.scroll.finishPullUp()
           })
        })
      },
      getData() {
        this.getHomeGoodsdata(this.cid)
      },
      tabClick(index) {
        switch(index) {
          case 0:
            this.cid = 50
            break;
          case 1:
            this.cid = 2
            break;
          case 2:
            this.cid = 5
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      scrollPosition(position) {
        this.isBackTopShow = (-position.y) > 500

        this.isShowTab = (-position.y) > this.tabOfsetTop
      },

      swiperImgLoad() {
        this.tabOfsetTop =this.$refs.tabControl2.$el.offsetTop
      }
    }
  }

</script>

<style scoped>
  #home {
    height: 100vh;
    position:relative;
  }
  .home-nav {
    background-color: red;
    color: seashell;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2; */
  }
  .wrapper {
    /* height: calc(100% - 93px);
    margin-top: 44px; */

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .tab-control {
    position: relative;
    z-index: 2;
  }

</style>
