<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="imgs"></ImgUrl>
    <GermanyCards :main="GermanyMain" :assist="GermanyAssist"></GermanyCards>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import GermanyCards from './components/GermanyCards'
import axios from 'axios'
export default {
  name: 'germany',
  components: {
    Header,
    ImgUrl,
    GermanyCards
  },
  data () {
    return {
      imgs: '',
      GermanyMain: [],
      GermanyAssist: []
    }
  },
  mounted () {
    this.getGermanyInfo()
  },
  methods: {
    getGermanyInfo () {
      axios.get('/api/germany.json')
        .then(this.getGermanyInfoSucc)
    },
    getGermanyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgs = data.imgs
        this.GermanyMain = data.GermanyMain
        this.GermanyAssist = data.GermanyAssist
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
