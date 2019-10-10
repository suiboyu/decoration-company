<template>
  <div class="content">
   <headline :ti="'效果装饰图'" :tit="'你的装修灵感图库'" :titl="'MORE'"></headline>
   <swiper :options="swiperOption">
      <swiper-slide class="slide" v-for="list in sketch" :key="list.id">
          <div class="img">
            <img :src="list.imgurl" alt="" width="100%">
          </div>
          <div class="bottom">
            <p> {{list.name}} </p>
        </div>
      </swiper-slide>
  </swiper>
  <mt-tabbar class="mt-tabbar">
  <mt-tab-item class="mt-tab-item" v-for="list in icon" :key="list.id">
    <div class="circle">
        <span class="iconfont"> {{list.iconfont}} </span>
    </div>
    {{list.name}}
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'DesignSketch',
  props: {
    sketch: Array,
    icon: Array
  },
  components: {
    headline
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

<style scoped>
  .swiper-container {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    height: 100px;
    /* background-color: red; */
  }
  a.mint-tab-item.mt-tab-item.is-selected {
    background-color: #f3f3f3;
  }
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:350px);
    padding: 15px;
    position: relative;
    .slide {
        .img {
          height: 100px;
          overflow: hidden;
        }
        .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 28px;
            padding-top: 7px;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            line-height: 18px;
            font-size: 12px;
            color: #fff;
            p:nth-child(1) {
                color: #ffd475;
                font-size: 14px;
            }
        }
    }
    .mt-tabbar {
        width: 100%;
        height: 70px;
        .mt-tab-item {
            color:#fedd11;
            .circle {
                @include circle(36px,#faefaf,4px);
                .iconfont {
                    display: block;
                    font-size: 26px;
                    line-height: 36px;
                    color: #fedd11;
                }
            }
        }
    }
}
</style>
