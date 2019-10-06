<template>
  <div class="content">
    <img :src="img" alt="" width="100%">
  </div>
</template>

<script>
export default {
  name: 'FreeImg',
  props: {
    img: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:190px,$margin:1px);
    position: relative;
}
</style>
