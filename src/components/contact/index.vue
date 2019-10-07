<template>
  <div>
    <Header :isNike="true"></Header>
    <ImgUrl :imgurl="'//img.zcool.cn/community/0199435d8a0b71a8012060be789695.jpg@1280w_1l_2o_100sh.jpg'"></ImgUrl>
    <ContactInfo></ContactInfo>
  </div>
</template>

<script>
import Header from '../../public/header'
import ImgUrl from '../../public/img'
import ContactInfo from './components/ContactInfo'
export default {
  name: 'contact',
  components: {
    Header,
    ImgUrl,
    ContactInfo
  }
}
</script>

<style lang="scss" scoped>
</style>
