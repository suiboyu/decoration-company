<template>
  <div class="content">
    <span>轻奢品质生活黑白灰色调</span>
    <div class="bg">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="list in cards" :key="list.id">
        <h3 class="medium">
            <img :src="list.imgurl" alt="" width="100%">
        </h3>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignCards',
  props: {
    cards: Array
  }
}
</script>

<style lang="css" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item.el-carousel__item--card {
   border-radius: 10px;
   overflow: hidden;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    @include panel($height:200px,$margin:1px);
    background: url('../../../../static/images/surmon-1.jpg') no-repeat;
    span {
      display: block;
      padding-top:50px;
      color: #fffdbd;
      padding-left: 3px;
    }
    .bg {
        margin-top: 20px;
    }
}
</style>
