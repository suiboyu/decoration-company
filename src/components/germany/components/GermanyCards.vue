<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="装修主料" name="first" class="el-tab-pane">
          <div class="list" v-for="list in main" :key="list.id">
            <div class="item">
              <img :src="list.imgurl" alt="" width="100%">
            </div>
            <h3> {{list.name}} </h3>
            <p> {{list.desc}} </p>
          </div>
      </el-tab-pane>
      <el-tab-pane label="装修辅料" name="second">
          <div class="list" v-for="list in assist" :key="list.id">
            <div class="item">
              <img :src="list.imgurl" alt="" width="100%">
            </div>
            <h3> {{list.name}} </h3>
            <p> {{list.desc}} </p>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'GermanyCards',
  props: {
    main: Array,
    assist: Array
  },
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>

<style lang="css">
.el-tabs__item.is-top {
    width: 83%;
    text-align: center;
    background-color: #eee;
}
.el-tabs__content {
    background-color: #eee;
}
</style>

<style lang="scss" scoped>
.content {
    margin-top: 8px;
    .el-tab-pane {
        width: 100%;
        background-color: #eee;
        .list {
            width: 48%;
            height: 150px;
            box-sizing: border-box;
            .item {
                width: 90%;
                height: 100px;
                margin: 4px auto;
                overflow: hidden;
            }
            h3 {
                margin-top: 10px;
                font-weight: 700;
                text-align: center;
            }
            p {
                text-align: center;
                font-size: 12px;
                padding-top: 4px;
            }
        }
        .list:nth-child(odd) {
            float: right;
        }
    }
}
</style>
