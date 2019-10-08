<template>
  <div class="">
      <span class="gua">按热度<i class="iconfont gua">&#xe695;</i></span>
      <span>按时间<i class="iconfont">&#xe695;</i></span>
      <div class="content" v-for="list in info" :key="list.id">
          <div class="top">
              <h3> {{list.name}} </h3>
               <span class="iconfont">&#xe606;</span> <span> {{list.house}} /{{list.area}} 平</span>
               <p> {{list.date}} </p>
          </div>
          <div class="imgs">
            <div class="img">
              <img :src="list.img" alt="" width="100%">
            </div>
            <button>预约参观</button>
          </div>
          <div class="progress">
              <el-progress :percentage="list.number" class="el-progress" :format="format"></el-progress>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LiveInfo',
  props: {
    info: Array
  },
  data () {
    return {
    }
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
span {
    display: inline-block;
    font-size: 12px;
    margin-top: 10px;
    .iconfont {
        font-size: 10px;
    }
}
.gua {
    color: #cbab6e;
    padding-left: 6px;
}
.content {
    @include panel($height:280px,$margin:13px);
    .top {
        width: 100%;
        height: 60px;
        // background-color: red;
        box-sizing: border-box;
        padding: 10px;
        position: relative;
        h3 {
            margin-top: 6px;
            font-weight: 700;
        }
        span {
            color: #cc9958;
        }
        .iconfont {
            font-size: 14px;
            color: #cc9958;
        }
        p {
            position: absolute;
            right: 10px;
            top: 24px;
            font-size: 12px;
        }
    }
    .imgs {
        height: 180px;
        position: relative;
        .img {
            width: 94%;
            height: 180px;
            box-sizing: border-box;
            overflow: hidden;
            margin: 4px auto;
        }
        button {
            position: absolute;
            right: 15px;
            bottom: 22px;
            width: 25%;
            border-radius: 6px;
            background-color: #df515d;
            color: #eee;
            font-size: 12px;
        }
    }
    .progress {
        height: 20px;
        padding-left: 10px;
        padding-top: 6px;
    }
}
</style>
