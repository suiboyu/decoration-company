<template>
  <div class="">
      <div class="top">
          <p>设计职称 <span class="iconfont">&#xe604;</span> </p>
          <p>擅长风格 <span class="iconfont">&#xe604;</span> </p>
      </div>
      <span class="gua">按热度<i class="iconfont gua">&#xe695;</i></span>
      <span>按时间<i class="iconfont">&#xe695;</i></span>
      <div class="content" v-for="lists in people" :key="lists.id">
        <div class="info">
            <div class="img">
                <div class="circle">
                    <img :src="lists.head" alt="" width="100%">
                </div>
            </div>
            <div class="message">
                <span> {{lists.name}} </span>
                <span> {{lists.designer}} </span>
                <span> {{lists.year}} 年</span>
                <p> {{lists.desc}} </p>
                <button>预约TA</button>
            </div>
        </div>
        <div class="swipe">
          <swiper :options="swiperOption">
            <swiper-slide v-for="list in lists.imgs" :key="list.id">
                <img :src="list.imgurl"  width="100%">
            </swiper-slide>
          </swiper>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TeamPeople',
  props: {
    people: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
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
  width: 60%;
  height: 100px;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.top {
    width: 100%;
    height: 35px;
    background-color: #f3f3f3;
    margin-bottom: 13px;
    p {
        display: inline-block;
        text-align: center;
        line-height: 35px;
        font-size: 12px;
        font-weight: 700;
        .iconfont {
            font-size: 10px;
        }
    }
    p:nth-child(1) {
        width: 49%;
    }
    p:nth-child(2) {
        width: 49%;
    }
}
span {
    display: inline-block;
    font-size: 12px;
    .iconfont {
        font-size: 10px;
    }
}
.gua {
    color: #cbab6e;
    padding-left: 6px;
}
.content {
    @include panel($height:216px,$margin:13px);
    .info {
        width: 100%;
        height: 100px;
        // background-color: red;
        position: relative;
        .img {
            display: inline-block;
            width: 32%;
            height: 100px;
            // background-color: green;
            box-sizing: border-box;
            .circle {
                display: block;
                @include circle(70px,#ddd,13px);
            }
        }
        .message {
            display: inline-block;
            width: 60%;
            height: 100px;
            // background-color: yellow;
            position: absolute;
            box-sizing: border-box;
            padding-top: 20px;
            span {
                box-sizing: border-box;
                padding-left: 5px;
                color: #6a6a6a;
            }
            span:nth-child(1) {
                font-weight: 700;
                font-size: 18px;
                padding-left: 8px;
                color: #333;
            }
            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 8px;
                margin-left: 6px;
                font-size: 12px;
                color: #6a6a6a;
            }
            button {
                width: 55px;
                margin-left: 6px;
                margin-top: 8px;
                font-weight: 700;
                color:#fff;
                background: linear-gradient(to right, #d1b286 , #c6a272);
                border: 1px solid #943d00;
            }
        }
    }
}
</style>
