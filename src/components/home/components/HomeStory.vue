<template>
  <div class="content">
    <headline :ti="'业主故事'" :tit="'好服务用口碑说话'" :titl="'MORE'"></headline>
    <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide">
            <img src="//img.zcool.cn/community/01f5085d8ab168a801211d53bb4660.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="180px">
            <p>一个老业主东风湖发的红包近段时间</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <img src="//img.zcool.cn/community/01c8d25d8ab168a8012060be63c057.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="180px">
            <p>一个老业主东风湖发的红包近段时间</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <img src="//img.zcool.cn/community/014e1c5d8ab168a8012060be2d3f81.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="180px">
            <p>一个老业主东风湖发的红包近段时间</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <img src="//img.zcool.cn/community/01bbdb5d8ab168a801211d53d48a56.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="180px">
            <p>一个老业主东风湖发的红包近段时间</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 6</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 7</swiper-slide>
        <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'HomeStory',
  components: {
    headline
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 15,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.swiper-slide {
    height: 100px;
    /* background-color: red; */
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
  @include panel($height:260px);
  .swiper-slide {
      position: relative;
      height: 200px;
    //   background-color: red;
      width: 30%;
      p {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
  }
}
</style>
