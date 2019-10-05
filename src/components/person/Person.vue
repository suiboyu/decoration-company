<template>
  <div>
    <Header :isNike="true"></Header>
    <PersonImg :img="PersonImg"></PersonImg>
    <PersonSynopsis :synopsis="PersonSynopsis"></PersonSynopsis>
    <PersonMssion :mssion="PersonMssion"></PersonMssion>
    <PersonRecommend :recommend="PersonRecommend"></PersonRecommend>
  </div>
</template>

<script>
import Header from '../../public/header'
import PersonImg from './components/PersonImg'
import PersonSynopsis from './components/PersonSynopsis'
import PersonMssion from './components/PersonMssion'
import PersonRecommend from './components/PersonRecommend'
import axios from 'axios'
export default {
  name: 'Person',
  components: {
    Header,
    PersonImg,
    PersonSynopsis,
    PersonMssion,
    PersonRecommend
  },
  mounted () {
    this.getPersonInfo()
  },
  data () {
    return {
      PersonImg: '',
      PersonSynopsis: [],
      PersonMssion: [],
      PersonRecommend: []
    }
  },
  methods: {
    getPersonInfo () {
      axios.get('/api/person.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getPersonInfoSucc)
    },
    getPersonInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.PersonImg = data.PersonImg
        this.PersonSynopsis = data.PersonSynopsis
        this.PersonMssion = data.PersonMssion
        this.PersonRecommend = data.PersonRecommend
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
