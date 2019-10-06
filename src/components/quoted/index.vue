<template>
  <div>
    <Header :isNike="true"></Header>
    <QuotedImg :img="QuotedImg"></QuotedImg>
    <QuotedMessage :message="QuotedMessage"></QuotedMessage>
    <QuotedCase :mssion="QuotedCase"></QuotedCase>
  </div>
</template>

<script>
import Header from '../../public/header'
import QuotedImg from './components/QuotedImg'
import QuotedMessage from './components/QuotedMessage'
import QuotedCase from './components/QuotedCase'
import axios from 'axios'
export default {
  name: 'Quoted',
  components: {
    Header,
    QuotedImg,
    QuotedMessage,
    QuotedCase
  },
  data () {
    return {
      QuotedImg: '',
      QuotedMessage: [],
      QuotedCase: []
    }
  },
  mounted () {
    this.getQuotedInfo()
  },
  methods: {
    getQuotedInfo () {
      axios.get('/api/quoted.json')
        .then(this.getQuotedInfoSucc)
    },
    getQuotedInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.QuotedImg = data.QuotedImg
        this.QuotedMessage = data.QuotedMessage
        this.QuotedCase = data.QuotedCase
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
