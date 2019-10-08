<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="BuildingImg"></ImgUrl>
    <BuildingMessage :message="BuildingMessage"></BuildingMessage>
    <BuildingCase :mssion="BuildingCase"></BuildingCase>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import BuildingCase from './components/BuildingCase'
import BuildingMessage from './components/BuildingMessage'
import axios from 'axios'
export default {
  name: 'building',
  components: {
    Header,
    BuildingMessage,
    BuildingCase,
    ImgUrl
  },
  data () {
    return {
      BuildingImg: '',
      BuildingMessage: [],
      BuildingCase: []
    }
  },
  mounted () {
    this.getBuildingInfo()
  },
  methods: {
    getBuildingInfo () {
      axios.get('/api/building.json')
        .then(this.getBuildingInfoSucc)
    },
    getBuildingInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.BuildingImg = data.BuildingImg
        this.BuildingMessage = data.BuildingMessage
        this.BuildingCase = data.BuildingCase
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
