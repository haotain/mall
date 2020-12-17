<template>
  <div>
    <tab-bar>
      <tab-bar-item :path="'/home'" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_homeup.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar-active3.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item :path="'/catagory'">
        <img slot="item-icon" src="~assets/img/tabbar/icon-tabbar-chanpin-default.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar-active1.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item :path="'/cart'">
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_shoppingup.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar-active4.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item :path="'/profile'">
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_myup.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tab-bar-active2.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'App',
    components : {
      TabBar,
      TabBarItem
    },
    methods: {

    }
  }
</script>

<style scoped>
</style>
