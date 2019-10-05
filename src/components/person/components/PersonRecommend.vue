<template>
  <div class="content">
    <h3>-------- 同类型设计师推荐 --------</h3>
    <div class="sqrt" v-for="list in recommend" :key="list.id">
        <div class="circle">
          <img :src="list.imgurl" width="100%">
        </div>
        <span> {{list.name}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonRecommend',
  props: {
    recommend: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:160px);
    h3 {
        text-align: center;
        margin-top: 10px;
    }
    .sqrt {
        width: 24%;
        height: 120px;
        // background-color: red;
        display: inline-block;
        .circle {
          @include circle(60px,#a7a3a3,20px);
          display: inline-block;
          box-sizing: border-box;
          margin-right: 10px;
          margin-left: 8px;
      }
      span {
          display: block;
          text-align: center;
      }
   }
}
</style>
