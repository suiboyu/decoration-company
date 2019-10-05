<template>
  <div>
   <Header :isNike="false"></Header>
   <HomeSwiper :swiper="HomeSwiper"></HomeSwiper>
   <HomeColumn></HomeColumn>
   <HomeFourImg :fourimg="HomeFourImg"></HomeFourImg>
   <HomeCheaper></HomeCheaper>
   <DesignSketch
     :sketch="DesignSketchImg"
     :icon="DesignSketchIcon"
   ></DesignSketch>
   <DesignTeam :team="DesignTeam"></DesignTeam>
   <HomeFlow :flow="HomeFlow"></HomeFlow>
   <HomeStory :story="HomeStory"></HomeStory>
   <HomeHonor></HomeHonor>
  </div>
</template>

<script>
import Header from '../../public/header'
import HomeSwiper from './components/HomeSwiper'
import HomeColumn from './components/HomeColumn'
import HomeFourImg from './components/HomeFourImg'
import HomeCheaper from './components/HomeCheaper'
import DesignSketch from './components/DesignSketch'
import DesignTeam from './components/DesignTeam'
import HomeFlow from './components/HomeFlow'
import HomeStory from './components/HomeStory'
import HomeHonor from './components/HomeHonor'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Header,
    HomeSwiper,
    HomeColumn,
    HomeFourImg,
    HomeCheaper,
    DesignSketch,
    DesignTeam,
    HomeFlow,
    HomeStory,
    HomeHonor
  },
  data () {
    return {
      HomeSwiper: [],
      HomeFourImg: [],
      DesignSketchImg: [],
      DesignSketchIcon: [],
      DesignTeam: [],
      HomeFlow: [],
      HomeStory: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.HomeSwiper = data.HomeSwiper
        this.HomeFourImg = data.HomeFourImg
        this.DesignSketchImg = data.DesignSketchImg
        this.DesignSketchIcon = data.DesignSketchIcon
        this.DesignTeam = data.DesignTeam
        this.HomeFlow = data.HomeFlow
        this.HomeStory = data.HomeStory
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
