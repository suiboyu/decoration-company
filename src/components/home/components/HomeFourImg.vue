<template>
  <div class="content">
      <div class="quarter-div">
        <img src="//img.zcool.cn/community/01fe045d916fcba801211d5370bf60.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="116px">
      </div>
      <div class="quarter-div">
        <img src="//img.zcool.cn/community/0180cb5d916fc9a8012060be2f8a3b.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="116px">
      </div>
      <div class="quarter-div">
        <img src="//img.zcool.cn/community/01a7a25d916fcba801211d53053579.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="116px">
      </div>
      <div class="quarter-div">
        <img src="//img.zcool.cn/community/01fe045d916fcba801211d5370bf60.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%" height="116px">
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFourImg'
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
  @include panel;
    width: 100%;
    height: 300px;
    position: relative;
    .quarter-div{
      width: 50%;
      float: left;
      padding: 8px;
      box-sizing: border-box;
      &:nth-child(odd) {
        padding-right: 5px;
      }
      &:nth-child(even) {
        padding-left: 5px;
      }
  }
}
</style>
