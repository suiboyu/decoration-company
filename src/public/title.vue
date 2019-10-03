<template>
  <div class="title">
    <span :ti="ti">{{ ti }}</span>
    <span :tit="tit">{{ tit }}</span>
    <span :titl="titl">{{ titl }}</span>
  </div>
</template>

<script>
export default {
  name: 'headline',
  props: {
    ti: String,
    tit: String,
    titl: String
  }
}
</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-top: 5px;
    span:nth-child(3) {
        float: right;
        padding-right: 10px;
        color: #5e5e5e;
        font-size: 12px;
    }
    span:nth-child(1) {
        font-weight: 700;
        font-size: 20px;
        padding-left: 8px;
    }
    span:nth-child(2) {
        color: #5e5e5e;
        font-size: 12px;
    }
}
</style>
