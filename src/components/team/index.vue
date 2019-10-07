<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="'//img.zcool.cn/community/0199435d8a0b71a8012060be789695.jpg@1280w_1l_2o_100sh.jpg'"></ImgUrl>
    <TeamPeople :people="this.TeamPeople"></TeamPeople>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import TeamPeople from './components/TeamPeople'
import axios from 'axios'
export default {
  name: 'team',
  components: {
    Header,
    ImgUrl,
    TeamPeople
  },
  data () {
    return {
      TeamPeople: []
    }
  },
  mounted () {
    this.getTeamInfo()
  },
  methods: {
    getTeamInfo () {
      axios.get('/api/team.json')
        .then(this.getTeamInfoSucc)
    },
    getTeamInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.TeamPeople = data.TeamPeople
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
