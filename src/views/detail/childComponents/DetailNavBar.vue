<template>
 <div id="detail-nav-bar">
   <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg">
        </div>
      </template>
      <template v-slot:conten>
        <div class="titles">
          <div v-for="(item, key) in titles" :key="key"
            class="item-titles"
            :class="{active : key === currentIndex}"
            @click="titleClick(key)"
            >{{item}}</div>
        </div>
      </template>

   </nav-bar>

 </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    data () {
      return {
        titles : ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style>
  .titles {
    display: flex;
    font-size: 14px;
  }
  .item-titles {
    flex: 1;
  }
  .back {
    padding-top: 6px;
  }
  .active {
    color: rgb(204, 64, 87);
  }
</style>
