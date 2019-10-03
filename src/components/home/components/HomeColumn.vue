<template>
  <div class="content">
    <div class="item" v-for="list in column" :key="list.id">
        <span class="iconfont" :style="list.iconBg"> {{list.iconfont}} </span>
        <span class="title"> {{list.title}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeColumn',
  props: {
    column: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel;
    @include flex(row);
    justify-content: space-around;
    height: 170px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    .item {
        width: 15%;
        height: 70px;
        // background-color: red;
        border-radius: 6px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        justify-content: space-around;
        .iconfont {
            display: block;
            font-size: 28px;
            text-align: center;
            line-height: 45px;
            background-color: #34353a;
            border-radius: 6px;
            color: #ffffa8;
        }
        .title {
            display: block;
            padding-top: 10px;
            font-size: 10px;
            text-align: center;
            color: #515360;
        }
    }
}
</style>
