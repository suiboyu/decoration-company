<template>
  <div class="content">
    <h3>设计师简介</h3>
    <div class="" v-for="list in synopsis" :key="list.id">
      <h4><span class="iconfont"> {{list.iconfont}} </span> {{list.name}} </h4>
      <p> {{list.desc}} </p>
    </div>
    <button>找TA订制设计</button>
    <div class="PersonMssion"></div>
  </div>
</template>

<script>
export default {
  name: 'PersonSynopsis',
  props: {
    synopsis: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include translucence($height:420px);
    h3 {
        text-align: center;
        margin-top: 20px;
        font-weight: 700;
        font-size: 18px;
    }
    h4 {
        box-sizing: border-box;
        padding-left: 15px;
        padding-top: 10px;
        color: #ce854e;
        span {
            display: inline-block;
            padding-right: 8px;
        }
    }
    p {
        box-sizing: border-box;
        padding-left: 38px;
        padding-top: 8px;
        padding-right: 28px;
        font-size: 12px;
        color: #a6a6a6;
    }
    button {
        display: block;
        width: 130px;
        height: 30px;
        margin: 24px auto;
        border-radius: 30px;
        color: #fff;
        background: linear-gradient(to right, #d1b286 , #c6a272);
    }
}
</style>
