<template>
  <div>
    <h1 @click="aa">Catagory</h1>
  </div>
</template>

<script>
  export default {
    name : 'Catagory',
    methods: {
      aa() {
        console.log(this.$toast)
        this.$toast.show('haha', 5000)
      }
    }
  }
</script>

<style>
</style>
