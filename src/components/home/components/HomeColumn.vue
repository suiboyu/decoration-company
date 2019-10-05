<template>
  <div class="content">
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe68c;</span>
        <span class="title">免费报价</span>
    </router-link>
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe6db;</span>
        <span class="title">免费设计</span>
    </router-link>
    <router-link class="item" tag="div" to="/design/index">
        <span class="iconfont">&#xe61e;</span>
        <span class="title">效果图</span>
    </router-link>
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe60d;</span>
        <span class="title">参观工地</span>
    </router-link>
    <router-link class="item" tag="div" to="/team/index">
        <span class="iconfont">&#xe68a;</span>
        <span class="title">设计团队</span>
    </router-link>
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe600;</span>
        <span class="title">德系精工</span>
    </router-link>
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe602;</span>
        <span class="title">实景工地</span>
    </router-link>
    <router-link class="item" tag="div" to="/">
        <span class="iconfont">&#xe64f;</span>
        <span class="title">关于我们</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeColumn'
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
