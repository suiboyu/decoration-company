<template>
  <div>
    <Header class="header" :isNike="true" :title="'效果图'"></Header>
    <DesignCards :cards="Designcards"></DesignCards>
    <DesignMessage
      :name="name"
      :sty="sty"
      :house="house"
      :area="area"
      :mottom="mottom"
    ></DesignMessage>
  </div>
</template>

<script>
import Header from '../../public/header'
import DesignCards from './components/DesignCards'
import DesignMessage from './components/DesignMessage'
import axios from 'axios'
export default {
  name: 'design',
  components: {
    Header,
    DesignCards,
    DesignMessage
  },
  data () {
    return {
      Designcards: [],
      name: '',
      sty: '',
      house: '',
      area: '',
      mottom: ''
    }
  },
  mounted () {
    this.getDesignInfo()
  },
  methods: {
    getDesignInfo () {
      axios.get('/api/design.json')
        .then(this.getDesignInfoSucc)
    },
    getDesignInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Designcards = data.Designcards
        this.name = data.name
        this.sty = data.sty
        this.house = data.house
        this.area = data.area
        this.mottom = data.mottom
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
