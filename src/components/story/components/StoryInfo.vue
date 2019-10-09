<template>
  <div>
    <div class="top">
      <h2> {{name}} </h2>
      <h4>作者：{{editor}} &nbsp;&nbsp;&nbsp; 时间：{{date}} </h4>
      <p> {{ctx1}} </p>
    </div>
    <div class="img" v-for="list in imgs1" :key="list.id">
      <img :src="list.imgurl" alt="" width="100%">
    </div>
    <p> {{ctx2}} </p>
    <div class="img" v-for="list in imgs2" :key="list.id">
      <img :src="list.imgurl" alt="" width="100%">
    </div>
    <div class="circle">
      <span class="iconfont" @click="spanclick">&#xe60a;</span>
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryInfo',
  props: {
    name: String,
    ctx1: String,
    editor: String,
    date: String,
    ctx2: String,
    imgs1: Array,
    imgs2: Array
  },
  data () {
    return {
      count: 20
    }
  },
  methods: {
    spanclick () {
      this.count++
      this.$message({
        message: '感谢客官打赏',
        center: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.top {
  width: 92%;
  height: 140px;
  margin: 10px auto;
  color: #3f413f;
  h2 {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
  }
  h4 {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
  }
  p {
    padding: 15px;
    font-size: 12px;
    line-height: 15px;
  }
}
.img {
  width: 92%;
  height: 100px;
  overflow: hidden;
  margin: 8px auto;
}
p {
  width: 92%;
  margin: 15px auto;
  line-height: 18px;
  font-size: 13px;
}
.circle {
  color: #fff;
  @include circle(60px,#e05656,20px);
  span {
    display: block;
    text-align: center;
    line-height: 45px;
  }
  span:nth-child(2) {
    line-height: 3px;
  }
}
</style>
