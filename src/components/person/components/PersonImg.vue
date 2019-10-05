<template>
  <div class="content">
    <img :src="img" alt="" width="100%">
  </div>
</template>

<script>
export default {
  name: 'PersonImg',
  props: {
    img: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:206px,$margin:1px);
    position: relative;
}
</style>
