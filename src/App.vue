<template>
  <div id="app">

    <HomeHeader class="header" :isNike="false"></HomeHeader>

    <router-view/>

    <Tabbar></Tabbar>

  </div>
</template>

<script>
import HomeHeader from './public/header'
import Tabbar from './public/tabbar'
export default {
  name: 'App',
  components: {
    HomeHeader,
    Tabbar
  }
}
</script>

<style lang="css" scoped>
.mint-header {
  background-color: #000!important;
}
</style>

<style lang="scss" scoped>
.header {
  background-color: #000!important;
}
</style>
