<template>
  <div>
    <div class="culture">
        <h3>企业文化</h3>
        <div v-for="list in block" :key="list.id">
          <div  :class="'item' + list.id">
            <span> {{list.name}} </span>
            <span> {{list.desc}} </span>
          </div>
        </div>
    </div>
    <div class="advantage">
        <p class="adv">企业优势</p>
        <div class="list1" v-for="list in advantage" :key="list.id">
            <span class="iconfont"> {{list.icon}} </span>
            <h3> {{list.name}} </h3>
            <p> {{list.desc}} </p>
        </div>
    </div>
    <div class="environment">
        <h2>企业环境</h2>
        <div class="imgs">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
       </div>
    </div>
    <div class="awards">
        <h2>荣获奖项</h2>
        <div class="array" v-for="list in awards" :key="list.id">
            <div class="left">
                <span class="iconfont">&#xe6a0;</span>
            </div>
            <div class="right">
                <span> {{list.desc}} </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCompany',
  props: {
    block: Array,
    advantage: Array,
    awards: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.culture {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    position: relative;
    h3 {
        text-align: center;
        padding-top: 20px;
        font-weight: 700;
        font-size: 18px;
    }
    .item1 {
        @include panel();
        width: 48%;
        span:nth-child(1) {
            display: block;
            color: #c88953;
            text-align: center;
            margin-top: 18px;
        }
        span:nth-child(2) {
            display: block;
            box-sizing: border-box;
            padding: 18px;
            font-size: 12px;
            color: #b5b5b5;
        }
    }
    .item2 {
        @include panel($margin:30px);
        position: absolute;
        right: 8px;
        top: 35px;
        width: 48%;
        span:nth-child(1) {
            display: block;
            color: #c88953;
            text-align: center;
            margin-top: 18px;
        }
        span:nth-child(2) {
            display: block;
            box-sizing: border-box;
            padding: 18px;
            font-size: 12px;
            color: #b5b5b5;
        }
    }
    .item3 {
        @include panel($height:150px,$margin:8px);
        width: 99%;
        display: inline-block;
        span:nth-child(1) {
            display: block;
            color: #c88953;
            text-align: center;
            margin-top: 18px;
        }
        span:nth-child(2) {
            display: block;
            box-sizing: border-box;
            padding: 18px;
            font-size: 12px;
            color: #b5b5b5;
        }
    }
}
.advantage {
    width: 100%;
    height: 440px;
    position: relative;
    .adv {
        width: 100%;
        height: 45px;
        background-color: #1f1f1f;
        margin-top: 20px;
        text-align: center;
        line-height: 45px;
        font-size: 20px;
        color: #fdfdfd;
    }
    .list1 {
        @include panel($margin:10px);
        width: 45%;
        text-align: center;
        border-radius: 16px;
        .iconfont {
            display: block;
            box-sizing: border-box;
            padding-top: 13px;
            color: #c88953;
            font-size: 18px;
        }
        h3 {
            padding-top: 10px;
            font-weight: 700;
            font-size: 14px;
            color: #c88953;
        }
        p {
            box-sizing: border-box;
            padding: 10px;
            font-size: 12px;
        }
    }
    .list1:nth-child(odd) {
        float: right;
        margin-top: -111px;
        margin-right: 11px;
    }
    .list1:nth-child(even) {
        margin-left: 11px;
    }
}
.environment {
    h2 {
        text-align: center;
        padding-top: 10px;
        font-weight: 700;
        font-size: 18px;
        padding-bottom: 20px;
    }
    .imgs {
        span:nth-child(1) {
            display: inline-block;
            width: 57%;
            height: 100px;
            background: url('../../../../static/images/surmon-1.jpg') ;
            margin: 2px;
        }
        span:nth-child(2) {
            display: inline-block;
            width: 38%;
            height: 100px;
            margin: 2px;
            background: url('../../../../static/images/surmon-2.jpg') ;
        }
        span:nth-child(3) {
            display: inline-block;
            width: 42%;
            height: 100px;
            background: url('../../../../static/images/surmon-8.jpg');
            margin: 6px;
        }
        span:nth-child(4) {
            display: inline-block;
            width: 50%;
            height: 100px;
            background: url('../../../../static/images/surmon-9.jpg');
            margin: 4px;
        }
        span:nth-child(5) {
            display: inline-block;
            width: 32%;
            height: 100px;
            background: url('../../../../static/images/surmon-3.jpg');
            margin: 6px;
        }
        span:nth-child(6) {
            display: inline-block;
            width: 60%;
            height: 100px;
            background: url('../../../../static/images/surmon-5.jpg');
            margin: 4px;
        }
    }
}
.awards {
    h2 {
        text-align: center;
        padding-top: 10px;
        font-weight: 700;
        font-size: 18px;
        padding-bottom: 20px;
    }
    .array {
        width: 95%;
        height: 60px;
        background-color: #f3f3f3;
        margin: 10px auto;
        .left {
            width: 20%;
            height: 60px;
            display: inline-block;
            .iconfont {
                display: block;
                text-align: center;
                line-height: 60px;
                font-size: 30px;
                color: #eee;
                background: #c88953;
            }
       }
       .right {
            width: 79%;
            height: 60px;
            float: right;
            span {
                display: block;
                line-height: 16px;
                padding: 14px;
                font-size: 12px;
                color: #4c4c4c;
            }
        }
    }
}
</style>
