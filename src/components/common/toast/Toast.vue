<template>
 <div class="toast" v-show="isShow">
   {{message}}
 </div>
</template>

<script>
  export default {
    name: 'Toast',
    data () {
      return {
        message: '',
        isShow: false
      }
    },
    components: {

    },
    methods: {
      show(msg = '---', delay = 2000) {
        this.isShow = true
        this.message = msg

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, delay);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: rgba(0, 0, 0, .4);
    color: #ccc;
    padding: 5px 8px;
  }

</style>
