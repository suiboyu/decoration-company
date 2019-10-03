<template>
  <div class="content">
    <headline :ti="'业主故事'" :tit="'好服务用口碑说话'" :titl="'MORE'"></headline>
    <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="list in story" :key="list.id">
            <img :src="list.imgurl" width="100%" height="180px">
            <p> {{list.desc}} </p>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'HomeStory',
  props: {
    story: Array
  },
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
