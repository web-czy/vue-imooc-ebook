<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapGetters, mapActions } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
  computed: {
    ...mapGetters(['fileName'])
  },
  methods: {
    initEpub() {
      const url = 'http://192.168.1.74:8081/epub/' + this.fileName + '.epub'
      this.book = new Epub(url)
      console.log(this.book)
    },
    ...mapActions(['setFileName'])
  },
  mounted() {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '~assets/styles/global.scss';
</style>
