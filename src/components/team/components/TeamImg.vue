<template>
  <div class="content">
    <img src="//img.zcool.cn/community/0199435d8a0b71a8012060be789695.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%">
    <!-- <span>欧洲流行色<i>设计团队</i></span> -->
  </div>
</template>

<script>
export default {
  name: 'TeamImg'
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:206px,$margin:1px);
    position: relative;
    span {
        display: inline-block;
        box-sizing: border-box;
        padding-top: -10px;
        text-align: center;
        font-size: 20px;
        color:#fad812;
        i {
            font-weight: 700;
        }
    }
}
</style>
