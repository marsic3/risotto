<template>
  <!-- Body Wrapper -->
  <div id="body-wrapper">
    <Nuxt />

    <!-- Cookies Bar -->
    <s-cookies-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Color from 'color'

export default {
  name: 'LayoutSimple',
  components: {
    SCookiesBar: () => import('@/components/SCookiesBar/SCookiesBar')
  },
  computed: {
    ...mapState('theme', ['themeColor', 'themeInverted', 'themeBodyPadded', 'footerType']),
    ...mapState('settings', ['meta']),
    colorPrimaryLight() {
      return Color(this.themeColor).lighten(0.75)
    }
  },
  head() {
    return {
      title: this.meta.title,
      description: this.meta.description,
      keywords: this.meta.keywords,
      htmlAttrs: {
        'data-theme-inverted': this.themeInverted,
        style: `--color-primary: ${this.themeColor}; --color-primary-light: ${this.colorPrimaryLight};`
      },
      bodyAttrs: {
        class: this.themeBodyPadded ? 'body-padded' : null
      }
    }
  }
}
</script>

<style lang="scss">
#body-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: rgba(black, 0.5);
  content: ' ';
  z-index: 925;
}

#body-wrapper {
  &::before {
    @include transition-primary();
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(black, 0.5);
    content: ' ';
    z-index: 899;
    visibility: hidden;
    opacity: 0;
  }

  &.dropdown-visible:before {
    opacity: 1;
    visibility: visible;
  }
}
</style>
