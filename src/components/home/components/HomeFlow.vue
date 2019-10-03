<template>
  <div class="content">
    <headline :ti="'装修流程'"></headline>
<mt-tabbar class="mt-tabbar">
  <mt-tab-item id="外卖" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe612;</span>
        <i class="iconfont ">&#xe62e;</i>
    </div>
    在线预约
  </mt-tab-item>
  <mt-tab-item id="订单" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe605;</span>
        <i class="iconfont ">&#xe62e;</i>
    </div>
    预约测量
  </mt-tab-item>
  <mt-tab-item id="发现" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe607;</span>
        <i class="iconfont ">&#xe62e;</i>
    </div>
    设计方案
  </mt-tab-item>
  <mt-tab-item id="我的" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe6db;</span>
        <i class="iconfont ">&#xe62e;</i>
    </div>
    签订合同
  </mt-tab-item>
  <mt-tab-item id="我的" class="mt-tab-item">
    <div class="circle">
        <span class="iconfont">&#xe616;</span>
        <i class="iconfont ">&#xe62e;</i>
    </div>
    施工验收
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'HomeFlow',
  components: {
    headline
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:100px);
    position: relative;
    .mt-tabbar {
        width: 100%;
        height: 65px;
        background-color: #f3f3f3;
        .mt-tab-item {
            color:#171717;
            .circle {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #c1a269;
                margin: 4px auto;
                position: relative;
                .iconfont {
                    display: block;
                    font-size: 24px;
                    line-height: 36px;
                    color: #f1feed;
                }
                i {
                    // position: absolute;
                    // left: 32px;
                    // top: 0;
                    background-color: red;
                    color: #494949 !important;
                    display: inline-block;
                    box-sizing: border-box;
                    margin-left: 41px;
                    margin-top: -37px;
                    font-size: 12px !important;
                }
            }
        }
    }
}
</style>
