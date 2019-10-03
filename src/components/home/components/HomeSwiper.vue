<template>
  <div class="content">
     <mt-swipe :auto="4000" class="home-swiper">
      <mt-swipe-item>
          <img src="//img.zcool.cn/community/01db205d916802a8012060be4e569d.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="//img.zcool.cn/community/01a3be5d916802a801211d536d69fc.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="//img.zcool.cn/community/01562d5d916802a8012060bef16922.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%">
      </mt-swipe-item>
     </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper'
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
