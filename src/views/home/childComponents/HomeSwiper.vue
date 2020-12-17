<template>
  <swiper :autoplay="3000" indicator-color="white">
    <swiper-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>

  </swiper>
</template>

<script>

  import { Swiper, SwiperItem } from "components/common/swiper/index";

  export default {
    name: "MainSwiper",
    props:{
      banners:Array,
      default () {
        return []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods :{

    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
