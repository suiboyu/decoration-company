<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl=" 'https://img.zcool.cn/community/01af1c5d8824cda8012060be31631a.jpg@1280w_1l_2o_100sh.jpg'"></ImgUrl>
    <LiveInfo :info="LiveInfo"></LiveInfo>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import LiveInfo from './components/LiveInfo'
import axios from 'axios'
export default {
  name: 'live',
  components: {
    Header,
    ImgUrl,
    LiveInfo
  },
  data () {
    return {
      LiveInfo: []
    }
  },
  mounted () {
    this.getLiveInfo()
  },
  methods: {
    getLiveInfo () {
      axios.get('/api/live.json')
        .then(this.getLiveInfoSucc)
    },
    getLiveInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.LiveInfo = data.LiveInfo
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
