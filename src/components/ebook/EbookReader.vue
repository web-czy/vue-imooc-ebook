<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { ebookMixin } from 'utils/mixin'
import Epub from 'epubjs'
global.ePub = Epub
export default {
  mixins: [ebookMixin],
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev()
        this.hideTitleAndMenu()
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
        this.hideTitleAndMenu()
      }
    },
    toggleTitleAndMenu() {
      this.setMenuVisible(!this.menuVisible)
    },
    hideTitleAndMenu() {
      this.setMenuVisible(false)
    },
    initEpub() {
      const url = 'http://192.168.1.74:8081/epub/' + this.fileName + '.epub'
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        // 微信兼容性配置，这样微信上就能正常显示
        method: 'default'
      })
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        // 阻止默认时间和冒泡
        event.preventDefault()
        event.stopPropagation()
      })
    }
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
@import '~assets/styles/global';
</style>
