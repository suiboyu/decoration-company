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
