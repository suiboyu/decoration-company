<template>
  <div class="content">
   <headline :ti="'设计团队'" :tit="'金案设计  私人订制'" :titl="'MORE'"></headline>
   <swiper :options="swiperOption">
      <swiper-slide class="slide" v-for="list in team" :key="list.id">
        <img :src="list.imgurl" width="100%" height="150px">
        <div class="bottom">
            <p> {{list.name}} </p>
            <p> {{list.engineer}} </p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="zero">
        <el-input v-model="input" placeholder="填写手机内容" class="input"></el-input>
        <mt-button size="normal" class="mt-btn">0元设计</mt-button>
    </div>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'DesignTeam',
  props: {
    team: Array
  },
  components: {
    headline
  },
  data () {
    return {
      input: '',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
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
  .swiper-slide {
    width: 100%;
    height: 150px;
  }
  .swiper-slide:nth-child(2n) {
      width: 100%;
  }
  .swiper-slide:nth-child(3n) {
      width: 100%;
  }
  .swiper-container {
      overflow: visible;
  }
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:250px);
    .slide {
        .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 45px;
            padding-top: 7px;
            box-sizing: border-box;
            background-color: #393939;
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
    .zero {
        margin-top: 10px;
        margin-left: 5px;
        .input {
            width: 70%;
        }
        .mt-btn {
            font-size: 16px;
            background-color: #c89f6b;
            color: #fff;
        }
    }
}
</style>
