<template>
  <div class="content">
      <div class="quarter-div" v-for="list in fourimg" :key="list.id">
        <div class="img">
          <img :src="list.imgurl" width="100%">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFourImg',
  props: {
    fourimg: Array
  }
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
      .img {
        height: 116px;
        overflow: hidden;
      }
  }
}
</style>
