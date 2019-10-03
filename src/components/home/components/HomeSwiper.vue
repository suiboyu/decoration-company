<template>
  <div class="content">
     <mt-swipe :auto="4000" class="home-swiper">
      <mt-swipe-item v-for="list in swiper" :key="list.id">
          <img :src="list.imgurl" alt="" width="100%">
      </mt-swipe-item>
     </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiper: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include top;
    .home-swiper {
        width: 100%;
        height: 170px;
        background-color: #eee;
    }
}
</style>
