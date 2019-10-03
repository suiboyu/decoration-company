<template>
  <div>
   <HomeSwiper></HomeSwiper>
   <HomeColumn :column="HomeColumn"></HomeColumn>
   <HomeFourImg></HomeFourImg>
   <HomeCheaper></HomeCheaper>
   <DesignSketch></DesignSketch>
   <DesignTeam></DesignTeam>
   <HomeFlow></HomeFlow>
   <HomeStory></HomeStory>
   <HomeHonor></HomeHonor>
  </div>
</template>

<script>
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
      HomeColumn: []
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
        this.HomeColumn = data.HomeColumn
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
