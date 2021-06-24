<template>
  <header id="header" :class="{ 'absolute transparent': isHeaderTransparent }">
    <b-container>
      <!-- Logo -->
      <div class="module module-logo" :class="[{ hide: !showHeaderLogo }, headerLogoBackground.toLowerCase(), headerLogoStyle.toLowerCase()]">
        <nuxt-link to="/">
          <img class="logo-light" :src="headerLogoLight" alt="" width="88" />
          <img class="logo-dark" :src="headerLogoDark" alt="" width="88" />
        </nuxt-link>
      </div>
      <!-- Navigation -->
      <div class="module module-navigation">
        <s-navigation type="desktop" class="mr-4">
          <s-navigation-item v-for="(item, index) in navigation" :key="index" type="desktop" :item="item"></s-navigation-item>
        </s-navigation>
        <!-- <s-button v-if="menuDefaultView" :to="menuDefaultView" :variant="isHeaderTransparent ? 'outline-primary' : 'outline-secondary'"></s-button> -->
      </div>
      <!-- Cart -->
      <client-only>
        <button class="module module-cart right" @click.stop.prevent="showPanel()">
          <span class="cart-icon">
            <i class="ti ti-shopping-cart"></i>
            <span v-if="items.length > 0" class="notification">{{ items.length }}</span>
          </span>
          <span class="cart-value">{{ getCurrency(productsTotal) }}</span>
        </button>
      </client-only>
    </b-container>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

/**
 * Main desktop header.
 */
export default {
  name: 'SHeaderDesktop',
  components: {
    SNavigation: () => import('@/components/SNavigation/SNavigation'),
    SNavigationItem: () => import('@/components/SNavigation/SNavigationItem'),
    SButton: () => import('@/components/SButton/SButton')
  },
  computed: {
    ...mapGetters('cart', ['items', 'productsTotal']),
    ...mapState('shell', ['headerLogoTheme', 'showHeaderLogo', 'isHeaderTransparent']),
    ...mapState('settings', ['navigation', 'menuDefaultView']),
    ...mapState('theme', ['headerLogoBackground', 'headerLogoStyle', 'headerLogoLight', 'headerLogoDark'])
  },
  methods: {
    ...mapActions('cart', ['showPanel'])
  }
}
</script>

<style lang="scss">
#header {
  position: relative;
  width: 100%;
  background-color: $color-body;
  z-index: 900;

  @include media('<=md') {
    display: none;
  }

  > .container {
    height: $header-height;
    display: flex;
    align-items: center;
  }

  &.absolute {
    position: absolute;
  }

  &.light {
    background-color: white;
  }

  &.inverted {
    background-color: $color-dark;
  }

  &.transparent {
    background-color: transparent;
    color: white;
  }

  .module {
    display: inline-block;

    &.right {
      margin-left: auto;
    }

    &.left {
      margin-right: auto;
    }
  }

  .module-logo {
    position: relative;
    margin-right: 3rem;
    @include transition-secondary('transform, opacity');

    a {
      position: relative;
      display: inline-block;

      img {
        &:nth-child(2) {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }

    &.vertical {
      width: 240px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;

      &.hide {
        transform: translate3d(0, -100%, 0);
      }

      &.light {
        background-color: white;

        img {
          &.logo-light {
            visibility: hidden;
            opacity: 0;
          }

          &.logo-dark {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      &.dark {
        background-color: $color-dark;

        img {
          &.logo-dark {
            visibility: hidden;
            opacity: 0;
          }

          &.logo-light {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      img {
        max-width: 100px;
        max-height: 100px;
        object-fit: contain;
      }
    }

    &.horizontal {
      &.hide {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }

      img {
        height: $header-height * 0.5;
        width: auto;

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

  .module-navigation {
    flex: 1 1 auto;
  }

  .module-cart {
    @include reset(button);
    color: inherit;

    &:hover,
    &:focus {
      color: inherit;

      .cart-value {
        opacity: 0.6;
      }
    }

    .cart-icon {
      position: relative;

      i {
        font-size: 1.7rem;
        display: inline-block;
        color: $color-medium;
      }

      .notification {
        position: absolute;
        top: -0.8rem;
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

    .cart-value {
      @include transition-primary;
      font-size: 1.4rem;
      font-family: $font-secondary;
      border-left: 1px solid $color-line;
      margin-left: 0.5rem;
      padding-left: 0.75rem;
    }
  }

  &.transparent .module-cart {
    .cart-value {
      border-color: $color-line-inverted;
    }
  }
}
</style>
