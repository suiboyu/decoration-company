<template>
  <div>
    <Header :isNike="true" :title=" '业主故事' "></Header>
    <ImgUrl :imgurl="himg"></ImgUrl>
    <StoryInfo
      :name="name"
      :ctx1="ctx1"
      :editor="editor"
      :date="date"
      :ctx2="ctx2"
      :imgs1="imgs1"
      :imgs2="imgs2"></StoryInfo>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import StoryInfo from './components/StoryInfo'
import axios from 'axios'
export default {
  name: 'Story',
  components: {
    Header,
    ImgUrl,
    StoryInfo
  },
  mounted () {
    this.getStoryInfo()
  },
  data () {
    return {
      himg: '',
      name: '',
      ctx1: '',
      editor: '',
      date: '',
      imgs1: [],
      ctx2: '',
      imgs2: []
    }
  },
  methods: {
    getStoryInfo () {
      axios.get('/api/story.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getStoryInfoSucc)
    },
    getStoryInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.name = data.name
        this.himg = data.himg
        this.ctx1 = data.ctx1
        this.editor = data.editor
        this.date = data.date
        this.imgs1 = data.imgs1
        this.ctx2 = data.ctx2
        this.imgs2 = data.imgs2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
