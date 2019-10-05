<template>
  <div>
    <Header :isNike="true"></Header>
    <TeamImg></TeamImg>
    <TeamPeople :people="this.TeamPeople"></TeamPeople>
  </div>
</template>

<script>
import Header from '../../public/header'
import TeamImg from './components/TeamImg'
import TeamPeople from './components/TeamPeople'
import axios from 'axios'
export default {
  name: 'team',
  components: {
    Header,
    TeamImg,
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
