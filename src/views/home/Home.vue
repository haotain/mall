<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:conten>
        购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/NavBar'

  export default {
    name : 'Home',
    components: {
      NavBar
    }
  }
</script>

<style>
  .home-nav {
    background-color: red;
    color: seashell;
  }
</style>
