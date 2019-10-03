<template>
  <div class="content">
    <div class="top">
        <span>算算依禾装修会省多少钱?</span>
        <span class="tspan"> 已有 <i>{{this.count}}</i>人获得报价 </span>
    </div>
    <div class="bottom">
        <div class="number"> <i> {{this.result}} </i> </div>
        <el-input
          v-model="input1"
          placeholder="您的称呼"
          class="btn"
        >
        </el-input>
        <el-input
          placeholder="手机号"
          suffix-icon="el-icon-star-on"
          v-model="input2"
          class="btn"
        >
       </el-input>
       <el-input
          placeholder="装修面积"
          suffix-icon="el-icon-star-on"
          v-model="input3"
          class="btn"
        >
       </el-input>
       <button class="but" @click="handlebtn">获得报价</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCheaper',
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      result: 0,
      count: 45555
    }
  },
  methods: {
    handlebtn () {
      if (this.input3 && this.input2) {
        this.result = this.input3 * 12556
        this.count++
      }
      return this.result
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:250px,$bgcolor:#34353a);
    .top {
        padding: 18px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        .tspan {
            color: #fff;
            font-size: 10px;
            i {
                color: red;
            }
        }
    }
    .bottom {
        width: 100%;
        height: 180px;
        // background-color: red;
        position: relative;
        .number {
            @include panel($height:40px,$bgcolor:#eee, $margin:10px);
            margin-left: 6px;
            margin-right: 9px;
            i {
                display: block;
                text-align: right;
                line-height: 40px;
                padding-right: 10px;
                font-size: 20px;
            }
        }
        .btn {
            width: 64%;
            margin-top: 10px;
            margin-left: 5px;
            &:nth-child(4) {
                margin-top: 4px;
            }
            &:nth-child(3) {
                margin-top: 4px;
            }
        }
        .but {
            position: absolute;
            width: 30%;
            height: 125px;
            right: 9px;
            top: 50px;
            background: #cfae81;
            box-sizing: border-box;
            border: 1px solid #ffe5a0;
            color: #fafffc;
        }
    }
}
</style>
