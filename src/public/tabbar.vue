<template>
  <div>

     <div class="bottom">
        <p>依禾装饰公司版权所有</p>
        <p>中国注册上号545645645654</p>
        <p>备案号5546564</p>
     </div>

    <mt-tabbar fixed class="mt-tabbar">
      <mt-tab-item id="外卖" class="mt-tab-item">
        <span class="iconfont">&#xe606;</span>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单" class="mt-tab-item">
        <span class="iconfont">&#xe602;</span>
        免费报价
      </mt-tab-item>
      <mt-tab-item id="发现" class="mt-tab-item">
        <span class="iconfont">&#xe745;</span>
        电话
      </mt-tab-item>
      <router-link to="/free/index">
        <mt-tab-item id="我的" class="mt-tab-item">
          <span class="iconfont">&#xe603;</span>
          免费设计
        </mt-tab-item>
      </router-link>
      <mt-tab-item id="我的" class="mt-tab-item">
        <span class="iconfont">&#xe609;</span>
        联系
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
.mt-tabbar {
    widows: 100%;
    height: 47px;
    .mt-tab-item {
        background: #191919;
        color: #f4f4f4;
        border: 0px !important;
        .iconfont {
          display: block;
          font-size: 20px;
          text-align: center;
          color: #f9e58f;
          padding-bottom: 3px;
       }
    }
}
.bottom {
    width: 100%;
    height: 130px;
    p {
        text-align: center;
        box-sizing: border-box;
        color: #b3b3b3;
    }
    p:nth-child(1){
        padding-top: 20px;
    }
}
</style>
