<template>
  <div class="content">
   <headline :ti="'效果装饰图'" :tit="'你的装修灵感图库'" :titl="'MORE'"></headline>
   <swiper :options="swiperOption">
      <swiper-slide>
          <img src="//img.zcool.cn/community/01cb195d8b201ca8012060be772b86.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/013e6b5d8b201ca801211d53e0907c.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide class="slide">
          <img src="//img.zcool.cn/community/0132705d8b201ba801211d535a2a52.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
          <div class="bottom">
            <p>徐波</p>
        </div>
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/01aa9f5d8b201ca8012060be1297e6.png@1280w_1l_2o_100sh.png" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/01a4265d8b201fa8012060be7cb15a.png@1280w_1l_2o_100sh.png" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/0116b65d8ad4c2a8012060be307ebd.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
            <swiper-slide>
          <img src="//img.zcool.cn/community/01e3365d8824cea801211d5357951d.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/01af1c5d8824cda8012060be31631a.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/0138c55d8ad4c1a801211d537e2624.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <swiper-slide>
          <img src="//img.zcool.cn/community/010bbc5d8ad4c2a801211d53133427.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="100px">
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
  <mt-tabbar class="mt-tabbar">
  <mt-tab-item id="外卖" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe606;</span>
    </div>
    客厅
  </mt-tab-item>
  <mt-tab-item id="订单" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe606;</span>
    </div>
    餐厅
  </mt-tab-item>
  <mt-tab-item id="发现" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe606;</span>
    </div>
    卧室
  </mt-tab-item>
  <mt-tab-item id="我的">
    <!-- <img slot="icon" src="../assets/100x100.png"> -->
    厨房
  </mt-tab-item>
  <mt-tab-item id="我的">
    <!-- <img slot="icon" src="../assets/100x100.png"> -->
    卫生间
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'DesignSketch',
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
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:350px);
    padding: 15px;
    position: relative;
    .slide {
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
        // background-color: red;
        .mt-tab-item {
            // background-color: green;
            color:#fedd11;
            .circle {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: #faefaf;
                margin: 4px auto;
                overflow: hidden;
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
