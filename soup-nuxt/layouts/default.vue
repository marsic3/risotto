<template>
  <!-- Body Wrapper -->
  <div id="body-wrapper" :class="{ 'dropdown-visible': isDropdownVisible, 'header-absolute': isHeaderTransparent }">
    <!-- Header - Desktop -->
    <s-header-desktop />

    <!-- Header - Mobile -->
    <s-header-mobile />

    <!-- Panel - Mobile -->
    <s-navigation-mobile />

    <!-- Content -->
    <nuxt />

    <!-- Body Overlay -->
    <transition name="fade">
      <div v-show="showBodyOverlay" id="body-overlay" @click.prevent="handleOverlayClick()"></div>
    </transition>

    <!-- Footer -->
    <component :is="footer" />

    <!-- Cart - Panel -->
    <s-cart-panel />

    <!-- Cart - Modal -->
    <s-cart-modal v-if="activeItem" />

    <!-- Page Loader -->
    <transition name="fade">
      <div v-if="!mounted" id="page-loader" />
    </transition>

    <!-- Cookies Bar -->
    <s-cookies-bar />

    <!-- Customizer -->
    <!-- <s-customizer v-if="isDemo" /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Color from 'color'

export default {
  name: 'LayoutDefault',
  components: {
    SHeaderDesktop: () => import('@/components/SHeader/SHeaderDesktop'),
    SHeaderMobile: () => import('@/components/SHeader/SHeaderMobile'),
    SNavigationMobile: () => import('@/components/SNavigation/SNavigationMobile'),
    SCartPanel: () => import('@/components/SCart/SCartPanel'),
    SCartModal: () => import('@/components/SCart/SCartModal'),
    SCookiesBar: () => import('@/components/SCookiesBar/SCookiesBar'),
    SCustomizer: () => import('@/components/SCustomizer')
  },
  data() {
    return {
      isDemo: process.env.DEMO_MODE === 'true',
      mounted: false
    }
  },
  computed: {
    ...mapState('shell', ['showBodyOverlay', 'isDropdownVisible', 'showMobilePanel', 'isHeaderTransparent']),
    ...mapGetters('cart', ['activeItem', 'showPanel']),
    ...mapState('theme', ['themeColor', 'themeInverted', 'themeBodyPadded', 'footerType']),
    ...mapState('settings', ['meta']),
    footer() {
      return () => import(`@/components/SFooter/SFooter${this.footerType}`)
    },
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
  },
  mounted() {
    this.mounted = true
  },
  methods: {
    ...mapActions('cart', ['hidePanel']),
    ...mapMutations('shell', ['HIDE_MOBILE_PANEL']),
    handleOverlayClick() {
      this.showPanel ? this.hidePanel() : null
      this.showMobilePanel ? this.HIDE_MOBILE_PANEL() : null
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
