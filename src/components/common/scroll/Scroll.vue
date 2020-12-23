<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>

  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)

  export default {
    name: 'BackTop',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad : {
        type: Boolean,
        default: true
      }
    },
    data () {
     return {
       scroll: null
     }
   },
   components: {

   },
   mounted() {
     // ajax 异步加载延迟的话 滚动条已经加载了却没有数据导致页面没显示
    //  setTimeout(()=>{
    //     this.scroll = new BScroll('.wrapper', {
    //        probeType: 3
    //     })
    //     this.scroll.on('scroll', (position) => {
    //       // console.log(position);
    //     })
    //  }, 15000)
    this.scrollInit();

   },
   methods: {
    scrollInit() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      if (this.probeType ===2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scrollPosition', position)
        })
      }

      this.scroll.on('pullingUp', () => {
          this.$emit('getData')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x = 0, y = 0, time = 500) {
       this.scroll && this.scroll.scrollTo(x, y, time)
    }
   }

 }
</script>

<style scoped>


</style>
