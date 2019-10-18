<template>
  <div class="home">
    <span class="iconfont icon-selected"></span>
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.epub = Epub
export default {
  name: 'home',
  mounted() {
    this.book = new Epub('/SuperTimeFinishing.epub')
    this.book
      .renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      .display()
  }
}
</script>
