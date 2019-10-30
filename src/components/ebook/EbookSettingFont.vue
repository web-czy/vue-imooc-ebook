<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div
          class="preview"
          :style="{
            fontSize: fontSizeList[0].fontSize + 'px',
            paddingLeft: deviation + 'px'
          }"
          ref="preview"
        >
          A
        </div>
        <div class="select">
          <div
            class="select-wrapper"
            v-for="(item, index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.fontSize)"
          >
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div
          class="preview"
          :style="{
            fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px',
            paddingRight: deviation + 'px'
          }"
        >
          A
        </div>
      </div>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
import { ebookMixin } from 'utils/mixin'
import { FONT_SIZE_LIST } from 'utils/book.js'

export default {
  mixins: [ebookMixin],
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
      deviation: 0
    }
  },
  methods: {
    setFontSize(fontSize) {
      this.setDefaultFontSize(fontSize)
    }
  },
  watch: {
    settingVisible() {
      let winWidth = window.innerWidth
      let htmlSize = parseInt(document.querySelector('html').style.fontSize)
      let previewWidth = (40 / 37.5) * htmlSize
      this.deviation =
        (winWidth - previewWidth * 2) / (this.fontSizeList.length * 2) / 2 + 6
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import '~assets/styles/global';

.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 101;
  width: 100%;
  height: px2rem(90);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .setting-font-size {
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 px2rem(40);
      @include center;
      box-sizing: border-box;
    }
    .select {
      flex: 1;
      display: flex;
      .select-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        &:first-child {
          .line {
            &:first-child {
              border: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border: none;
            }
          }
        }
        .line {
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #ccc;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          .point {
            position: absolute;
            top: px2rem(-5);
            left: px2rem(-9);
            width: px2rem(15);
            height: px2rem(15);
            border-radius: 50%;
            background: #fff;
            border: px2rem(1) solid #ccc;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.15);
            @include center;
            .small-point {
              width: px2rem(5);
              height: px2rem(5);
              background: #000;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
