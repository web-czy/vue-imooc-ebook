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
export default {}
document.addEventListener('COMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style scoped lang='scss'>
.text {
  font-family: 'Days One';
  font-size: 20px;
  color: orange;
}
</style>
