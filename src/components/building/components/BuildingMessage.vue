<template>
  <div class="content">
    <h3>1OS填写，预约参观工地</h3>
    <h4>已有254人申请</h4>
    <input type="text" v-model="input1" placeholder="您的称呼">
    <input type="text" v-model="input2" placeholder="联系方式">
    <input type="text" v-model="input3" placeholder="房屋面积">
    <mt-button type="danger" size="large" class="mt-button" @click="handlemtbtn">立即预约</mt-button>
    <p v-for="list in message" :key="list.id"> {{list.desc}} </p>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'BuildingMessage',
  props: {
    message: Array
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    handlemtbtn () {
      this.result = this.input3 * 1232
      this.$message({
        message: '我们会于3天后给您答复',
        center: true,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include translucence($height:400px);
    h3 {
        text-align: center;
        margin-top: 30px;
        font-weight: 700;
        font-size: 16px;
    }
    h4 {
        text-align: center;
        margin-top: 10px;
        color:#c2a36c;
    }
    input {
        border: 1px solid #ddd;
        width: 95%;
        height: 40px;
        margin: 10px auto;
        box-sizing: border-box;
        display: block;
        padding-left: 6px;
        border-radius: 4px;
    }
    .mt-button {
        width: 95%;
        margin: 10px auto;
    }
    p {
        width: 80%;
        margin:15px auto;
        font-size: 12px;
    }
    .bottom {
        width: 100%;
        height: 125px;
        background: linear-gradient(rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.95));
        position: absolute;
        bottom: 1px;
    }
}
</style>
