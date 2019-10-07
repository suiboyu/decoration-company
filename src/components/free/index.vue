<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="FreeImg"></ImgUrl>
    <FreeMessage :message="FreeMessage"></FreeMessage>
    <FreeCase :mssion="FreeCase"></FreeCase>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import FreeMessage from './components/FreeMessage'
import FreeCase from './components/FreeCase'
import axios from 'axios'
export default {
  name: 'free',
  components: {
    Header,
    ImgUrl,
    FreeMessage,
    FreeCase
  },
  data () {
    return {
      FreeImg: '',
      FreeMessage: [],
      FreeCase: []
    }
  },
  mounted () {
    this.getFreeInfo()
  },
  methods: {
    getFreeInfo () {
      axios.get('/api/free.json')
        .then(this.getFreeInfoSucc)
    },
    getFreeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.FreeImg = data.FreeImg
        this.FreeMessage = data.FreeMessage
        this.FreeCase = data.FreeCase
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
