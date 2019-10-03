<template>
  <div class="content">
    <headline :ti="'品牌荣誉'" :tit="'多项国际认证 大品牌有保障'"></headline>
    <div class="imgs">
        <span class="item1"></span>
        <span class="item2"></span>
        <span class="item3"></span>
        <span class="item4"></span>
        <span class="item5"></span>
        <span class="item6"></span>
        <span class="item6"></span>
    </div>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'HomeHonor',
  components: {
    headline
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:400px);
    .imgs {
        span:nth-child(1) {
            display: inline-block;
            width: 57%;
            height: 100px;
            background: url('../../../../static/images/surmon-1.jpg') ;
            margin: 6px;
        }
        span:nth-child(2) {
            display: inline-block;
            width: 35%;
            height: 100px;
            margin: 4px;
            background: url('../../../../static/images/surmon-2.jpg') ;
        }
        span:nth-child(3) {
            display: inline-block;
            width: 42%;
            height: 100px;
            background: url('../../../../static/images/surmon-8.jpg');
            margin: 6px;
        }
        span:nth-child(4) {
            display: inline-block;
            width: 50%;
            height: 100px;
            background: url('../../../../static/images/surmon-9.jpg');
            margin: 4px;
        }
        span:nth-child(5) {
            display: inline-block;
            width: 30%;
            height: 100px;
            background: url('../../../../static/images/surmon-3.jpg');
            margin: 6px;
        }
        span:nth-child(6) {
            display: inline-block;
            width: 30%;
            height: 100px;
            background: url('../../../../static/images/surmon-5.jpg');
            margin: 1px;
        }
        span:nth-child(7) {
            display: inline-block;
            width: 30%;
            height: 100px;
            background: url('../../../../static/images/surmon-4.jpg');
            margin: 2px;
        }
    }
}
</style>
