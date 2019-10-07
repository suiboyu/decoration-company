<template>
  <div class="content">
    <div class="top">
        <div class="img">
            <img :src="img" width="100%">
        </div>
        <div class="block">
            <h3>依禾装饰简介</h3>
            <p>ABOUT US</p>
        </div>
        <div class="desc">
            <p v-for="list in desc" :key="list.id"> {{list.p}} </p>
        </div>
        <button>查看全部</button>
    </div>
    <div class="bottom">
        <div class="title">
            <h2>依禾董事长寄语</h2>
            <h3>CHAIRMAN MESSAGE</h3>
        </div>
        <div class="photo">
            <img :src="photo" alt="" width="100%">
        </div>
        <div class="word">
            <p> {{word}} </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutIntroduce',
  props: {
    img: String,
    desc: Array,
    photo: String,
    word: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/common.scss";
.content {
    width: 100%;
    height: 870px;
    margin-top: 50px;
    box-sizing: border-box;
    .top {
        position: relative;
        padding: 4px;
        .img {
            width: 80%;
            height: 110px;
            overflow: hidden;
            display: inline-block;
        }
        .block {
            width: 32%;
            height: 115px;
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            right: 10px;
            top: -35px;
            h3 {
                font-size: 20px;
                color: #ffdb85;
                text-align: center;
                margin-top: 30px;
            }
            p {
                color: #fff;
                text-align: center;
                padding-top: 6px;
            }
        }
        .desc {
            width: 94%;
            margin: 10px auto;
            box-sizing: border-box;
            padding: 10px;
            color: #878585;
            line-height: 20px;
            p{
                margin-bottom: 30px;
            }
        }
        button {
            width: 40%;
            height: 30px;
            margin: 5px auto;
            display: block;
            border: 1px solid #ccc;
            background-color: #eee;
        }
    }
    .bottom {
        width: 100%;
        height: 420px;
        margin-top: 35px;
        background-color: #1f1f1f;
        color: #eee;
        .title {
            text-align: center;
            h2 {
                box-sizing: border-box;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 24px;
                font-weight: 700;
                color: #f4ad3f;
            }
        }
        .photo {
            @include circle($width:150px,$top:10px);
        }
        .word {
            width: 94%;
            margin: 10px auto;
            box-sizing: border-box;
            padding: 10px;
            color: #ddd;
            line-height: 20px;
            font-size: 12px;
        }
    }
}
</style>
