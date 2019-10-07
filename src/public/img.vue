<template>
  <div class="content">
    <img :src="imgurl" alt="" width="100%">
  </div>
</template>

<script>
export default {
  name: 'ImgUrl',
  props: {
    imgurl: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/common.scss";
.content {
    @include panel($height:206px,$margin:1px);
    position: relative;
    overflow: hidden;
}
</style>
