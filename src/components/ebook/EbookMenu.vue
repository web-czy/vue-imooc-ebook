<template>
  <div class="ebook-menu">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        :class="{ 'hide-box-shadow': !menuVisible }"
        v-show="menuVisible"
      >
        <div class="icon-wrapper">
          <span class="iconfont icon-menu" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(2)">
          <span class="iconfont icon-progress"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(1)">
          <span class="iconfont icon-bright"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(0)">
          <span class="iconfont icon-a">A</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
import { ebookMixin } from 'utils/mixin'

export default {
  mixins: [ebookMixin],
  methods: {
    showSetting(key) {}
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '~assets/styles/global';

.ebook-menu {
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      width: 25%;
      // flex: 1;
      @include center;
      .iconfont {
        font-size: px2rem(20);
      }
      .icon-progress {
        font-size: px2rem(24);
      }
    }
  }
}
</style>
