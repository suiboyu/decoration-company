<template>
  <div class="content">
   <mt-header fixed title="">
      <router-link to="/" slot="left">
      </router-link>
      <mt-button slot="right">
          <span>导航</span>
          <span class="iconfont">&#xe600;</span>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="css" scoped>
.mint-header {
    background-color: #252525;
}
</style>

<style lang="scss" scoped>
.content {
  z-index: 99;
}
</style>
