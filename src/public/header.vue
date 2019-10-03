<template>
  <div class="content">
   <mt-header fixed title="" :style="{'background-color':isNike? 'rgba(0, 0, 0, 0.1)': ' #252525'  }">
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
  name: 'HomeHeader',
  props: {
    isNike: Boolean
  }
}
</script>

<style lang="scss" scoped>
.content {
  z-index: 99;
}
</style>
