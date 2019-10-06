<template>
  <div class="content">
    <h3>代表作品</h3>
    <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="list in mssion" :key="list.id">
            <div class="img">
              <img :src="list.imgurl" width="100%" >
            </div>
            <span>{{ list.name }}</span>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'PersonMssion',
  props: {
    mssion: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
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
    /* width: 70%; */
    height: 190px;
    /* background-color: red; */
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:260px);
    width: 95%;
    margin: 0px auto;
    h3 {
        text-align: center;
        margin-top: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    .img {
        height: 160px;
        overflow: hidden;
    }
    span {
        display: block;
        text-align: center;
        padding-top: 4px;
    }
}
</style>
