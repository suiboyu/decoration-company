<template>
  <div id="app">

    <router-view/>

    <Tabbar></Tabbar>

  </div>
</template>

<script>
import Tabbar from './public/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="css" scoped>
</style>

<style lang="scss" scoped>
</style>
