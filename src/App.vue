<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <span class="text">ABCKEFG</span>
    <router-view />
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapGetters } from 'vuex'
const getters = {
  a: () => 1,
  b: () => 2
}

function fn(keys) {
  const data = {}
  keys.forEach(key => {
    if (getters.hasOwnProperty(key)) {
      data[key] = getters[key]
    }
  })
  return data
}
export default {
  computed: {
    ...mapGetters(['test']),
    ...fn(['a', 'b', 'c'])
  },
  mounted() {
    console.log(this.a, this.b)
    // this.$store.dispatch('setTest', 9).then(() => {
    //   console.log(this.$store.state.book.test)
    // })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang='scss' scoped>
@import './assets/styles/global.scss';

.text {
  font-family: 'Days One';
  // 在375标准像素下的20px
  // 会进行等比例缩放
  font-size: px2rem(20);
  color: orange;
}
</style>
