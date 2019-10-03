<template>
  <div class="content">
    <headline :ti="'装修流程'"></headline>
    <mt-tabbar class="mt-tabbar">
      <mt-tab-item class="mt-tab-item" v-for="list in flow" :key="list.id">
        <div class="circle">
          <span class="iconfont"> {{list.iconfont}} </span>
          <i class="iconfont ">&#xe62e;</i>
        </div>
        {{ list.name }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import headline from '../../../public/title'
export default {
  name: 'HomeFlow',
  props: {
    flow: Array
  },
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
