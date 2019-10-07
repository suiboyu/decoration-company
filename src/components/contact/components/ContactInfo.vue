<template>
  <div class="content">
    <h3>吉林市依禾装修公司</h3>
    <p>地址： 设置7个问题，通过简单的交互形式和有趣的问题引导用户作答。最后生成一张专属的你的人生成分表结果页</p>
    <div class="number">
        <el-input
          placeholder="手机号"
          v-model="input2"
          class="btn"
        >
       </el-input>
       <button class="but" @click="handlebtn">获得报价</button>
    </div>
    <div class="img">
        <img src="https://img.zcool.cn/community/01ed055d88292ba801211d53848ea3.png@1280w_1l_2o_100sh.png" alt="" width="100%">
    </div>
    <div class="bottom">
        <div>售前电话： 0434485552/45754544</div>
        <div>售后电话： 0434485552/45754544</div>
        <div>QQ：845844545</div>
        <div>微信公众号：依禾装饰</div>
        <div>邮箱：78878484</div>
        <div>售前电话： 0434485552/45754544</div>
        <div>售后电话： 0434485552/45754544</div>
        <div>QQ：845844545</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data () {
    return {
      input2: ''
    }
  },
  methods: {
    handlebtn () {
      this.input2 = ''
      this.$message({
        message: '一周之后将会以电话通知您',
        center: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    width: 94%;
    height: 500px;
    margin: 20px auto;
    h3 {
        margin-left: 10px;
        font-weight: 700;
    }
    p {
        padding: 10px;
        font-size: 12px;
    }
    .number {
        height: 55px;
        margin-top: 5px;
        .btn {
          width: 64%;
        }
        .but {
            width: 34%;
            height: 39px;
            background: #cfae81;
            box-sizing: border-box;
            border: 1px solid #ffe5a0;
            color: #fafffc;
            border-radius: 8px;
        }
    }
    .img {
        height: 150px;
        overflow: hidden;
    }
    .bottom {
        padding-top: 10px;
        line-height: 24px;
        font-size: 12px;
    }
}
</style>
