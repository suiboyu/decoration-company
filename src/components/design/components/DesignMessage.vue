<template>
  <div class="content">
    <el-input
      v-model="input"
      placeholder="输入手机号"
      class="btn"
    ></el-input>
    <button class="but" @click="handlebtn">算算多少钱</button>
    <h3>案例信息</h3>
    <p>小区名称 {{name}} : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;风格 : {{sty}} </p>
    <p>户型 {{house}} : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面积 : {{area}}</p>
    <h3>设计说明</h3>
    <p> {{mottom}} </p>
    <div class="heart">
      <div class="circle">
        <span class="iconfont" @click="spanclick">&#xe60a;</span>
        <span>{{ count }}</span>
      </div>
    </div>
    <div class="cheaper">
      <el-input
          placeholder="您的称呼"
          class="btn"
          v-model="input1"
        >
        </el-input>
        <el-input
          placeholder="手机号"
          suffix-icon="el-icon-star-on"
          class="btn"
          v-model="input2"
        >
        </el-input>
        <button class="button" @click="handbtn">免费设计</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignMessage',
  props: {
    name: String,
    sty: String,
    house: String,
    area: String,
    mottom: String
  },
  data () {
    return {
      input: '',
      count: 20,
      input1: '',
      input2: ''
    }
  },
  methods: {
    spanclick () {
      this.count++
      this.$message({
        message: '感谢客官打赏',
        center: true
      })
    },
    handlebtn () {
      this.input = ''
      this.$message({
        message: '共458844',
        center: true
      })
    },
    handbtn () {
      this.input1 = ''
      this.input2 = ''
      this.$message({
        message: '感谢您对我们的信任,我们会于一周后给您答复',
        center: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:405px,$margin:120px);
    position: relative;
    // background-color: #e2e4e3;
    .btn {
        width: 64%;
        margin-top: 10px;
        margin-left: 5px;
    }
    .but {
        position: absolute;
        width: 30%;
        height: 38px;
        right: 9px;
        top: 12px;
        background: #cfae81;
        box-sizing: border-box;
        border: 1px solid #ffe5a0;
        color: #fafffc;
        border-radius: 4px;
    }
    h3 {
      font-weight: 700;
      padding-left: 10px;
      padding-top: 15px;
      box-sizing: border-box;
      color: #191b1a;
    }
    p {
      padding-left: 10px;
      padding-top: 10px;
      font-size: 12px;
      color: #919191;
    }
    .heart {
      @include panel($height:400px,$margin:15px);
      width: 100%;
      height: 100px;
      background-color: #e2e4e3;
      .circle {
        width: 60px;
        height: 60px;
        background-color: #e05656;
        margin: 20px auto;
        border-radius: 50%;
        color: #fff;
        span {
          display: block;
          text-align: center;
          line-height: 45px;
        }
        span:nth-child(2) {
          line-height: 3px;
        }
      }
    }
    .cheaper {
      position: relative;
      width: 100%;
      height: 108px;
      background-color: #2f3035;
      margin-top: 10px;
      border-radius: 8px;
      margin-bottom: 5px;
      .button {
          position: absolute;
          width: 30%;
          height: 90px;
          right: 9px;
          top: 10px;
          background: #cfae81;
          box-sizing: border-box;
          border: 1px solid #ffe5a0;
          color: #fafffc;
      }
    }
}
</style>
