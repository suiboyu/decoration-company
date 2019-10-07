<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="print"></ImgUrl>
    <AboutIntroduce :img="img" :desc="desc" :photo="photo" :word="word"></AboutIntroduce>
    <AboutCompany :block="block" :advantage="advantage" :awards="awards"></AboutCompany>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import AboutIntroduce from './components/AboutIntroduce'
import AboutCompany from './components/AboutCompany'
import axios from 'axios'
export default {
  name: 'about',
  components: {
    Header,
    ImgUrl,
    AboutIntroduce,
    AboutCompany
  },
  data () {
    return {
      print: '',
      img: '',
      desc: [],
      photo: '',
      word: '',
      block: [],
      advantage: [],
      awards: []
    }
  },
  mounted () {
    this.getAboutInfo()
  },
  methods: {
    getAboutInfo () {
      axios.get('/api/about.json')
        .then(this.getAboutInfoSucc)
    },
    getAboutInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.print = data.print
        this.img = data.img
        this.desc = data.desc
        this.photo = data.photo
        this.word = data.word
        this.block = data.block
        this.advantage = data.advantage
        this.awards = data.awards
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
