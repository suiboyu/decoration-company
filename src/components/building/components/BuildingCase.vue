<template>
  <div class="content">
    <h3>---------------看领居家的实景工地---------------</h3>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="list in mssion" :key="list.id">
          <img :src="list.imgurl" alt="" width="100%">
          <span> {{list.name}}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'BuildingCase',
  props: {
    mssion: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerColumn: 2,
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
    height: 180px;
}
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    h3 {
        text-align: center;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .swiper-slide {
        span {
            display: block;
            text-align: center;
            line-height: 38px;
            font-size: 12px;
        }
    }
}
</style>
