<template>
  <header id="header-mobile">
    <!-- Nav Toggle -->
    <div class="module module-nav-toggle">
      <a href="#" id="nav-toggle" @click.prevent="SHOW_MOBILE_PANEL()"><span></span><span></span><span></span><span></span></a>
    </div>
    <!-- Logo -->
    <div class="module module-logo">
      <nuxt-link to="/">
        <img class="logo-light" :src="headerLogoLight" alt="" />
        <img class="logo-dark" :src="headerLogoDark" alt="" />
      </nuxt-link>
    </div>
    <!-- Cart -->
    <client-only>
      <div class="module-cart">
        <button class="cart-toggle" @click.stop.prevent="showPanel()">
          <i class="ti ti-shopping-cart"></i>
          <span v-if="items.length > 0" class="notification">{{ items.length }}</span>
        </button>
      </div>
    </client-only>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

/**
 * Main mobile header.
 */
export default {
  name: 'SHeaderMobile',
  computed: {
    ...mapState('theme', ['headerLogoLight', 'headerLogoDark']),
    ...mapGetters('cart', ['items'])
  },
  methods: {
    ...mapActions('cart', ['showPanel']),
    ...mapMutations('shell', ['SHOW_MOBILE_PANEL'])
  }
}
</script>

<style lang="scss">
#header-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-mobile-height;
  z-index: 900;
  display: none;
  padding: 0 15px;
  background-color: $color-body;

  @include media('<=md') {
    display: flex;
    align-items: center;
  }

  &.light {
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(black, 0.1);
  }

  &.inverted {
    background-color: $color-dark;
  }

  .module-logo {
    width: calc(100% - 90px);
    margin: 0 auto;
    text-align: center;
    flex: 1 1 auto;

    img {
      height: calc(#{$header-mobile-height} - 20px);
      display: block;
    }

    a {
      position: relative;
      display: inline-block;

      img {
        &:nth-child(2) {
          position: absolute;
          left: 0;
          top: 0;
        }

        [data-theme-inverted='true'] & {
          &.logo-dark {
            visibility: hidden;
          }
          &.logo-light {
            visibility: visible;
          }
        }

        [data-theme-inverted='false'] & {
          &.logo-dark {
            visibility: visible;
          }
          &.logo-light {
            visibility: hidden;
          }
        }
      }
    }
  }

  .module-nav-toggle {
    flex: 0 0 25%;
  }

  .module-cart {
    @include reset(button);
    flex: 0 0 25%;
    text-align: right;

    .cart-toggle {
      position: relative;
      @include reset(button);
      display: inline-block;
      padding: 0 10px;

      i {
        position: relative;
        top: 4px;
        font-size: 1.7rem;
        display: inline-block;
        color: $color-medium;
      }

      .notification {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $color-green;
        color: white;
        font-weight: 600;
        font-size: 0.7rem;
        display: inline-block;
        border-radius: 30px;
        padding: 0.15rem 0.3rem 0.2rem 0.35rem;
        line-height: 1;
      }
    }
  }
}

// Navigation Toggle

#nav-toggle {
  width: 26px;
  height: 26px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: $color-global;
    opacity: 1;
    left: 0;
    border-radius: 2px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 3px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 11px;
    }

    &:nth-child(4) {
      top: 19px;
    }
  }

  &.open span {
    &:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
}

.inverted #nav-toggle span {
  background: white;
}
</style>
