<template>
  <nav id="panel-mobile" :class="{ show: showMobilePanel }">
    <!-- Logo -->
    <div class="module module-logo" :class="[headerLogoBackground.toLowerCase()]">
      <nuxt-link to="/">
        <img class="logo-light" :src="headerLogoLight" alt="" />
        <img class="logo-dark" :src="headerLogoDark" alt="" />
      </nuxt-link>
    </div>
    <!-- Navigation -->
    <s-navigation type="mobile">
      <s-navigation-item v-for="(item, index) in navigation" :key="index" type="mobile" :item="item"></s-navigation-item>
    </s-navigation>
    <div class="module-actions text-center">
      <s-button v-if="menuDefaultView" :to="menuDefaultView" variant="outline-secondary" wide>Order Now!</s-button>
    </div>
    <!-- Social -->
    <div class="module module-social">
      <h6 class="text-sm mb-3">Follow Us!</h6>
      <s-social-media :media="socialMedia" />
    </div>
    <!-- Close -->
    <div class="module module-close" :class="[headerLogoBackground.toLowerCase()]">
      <b-button-close @click.prevent="HIDE_MOBILE_PANEL" />
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

/**
 * Main mobile navigation.
 */
export default {
  name: 'SNavigationMobile',
  components: {
    SNavigation: () => import('@/components/SNavigation/SNavigation'),
    SNavigationItem: () => import('@/components/SNavigation/SNavigationItem'),
    SButton: () => import('@/components/SButton/SButton'),
    SSocialMedia: () => import('@/components/SSocialMedia/SSocialMedia')
  },
  computed: {
    ...mapState('shell', ['showMobilePanel']),
    ...mapState('settings', ['menuDefaultView', 'socialMedia', 'navigation']),
    ...mapState('theme', ['headerLogoBackground', 'headerLogoLight', 'headerLogoDark'])
  },
  watch: {
    $route() {
      this.HIDE_MOBILE_PANEL()
    }
  },
  methods: {
    ...mapMutations('shell', ['HIDE_MOBILE_PANEL'])
  }
}
</script>

<style lang="scss">
#panel-mobile {
  @include transition-secondary;
  @include fullheight;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color-body;
  width: 300px;
  z-index: 970;
  box-shadow: 0 0 30px 0 rgba(black, 0.1);
  display: none;
  visibility: hidden;
  transform: translateX(-100%);
  overflow: auto;
  flex-direction: column;

  @include media('<=md') {
    display: flex;
  }

  @include media('<=xs') {
    width: 100%;
  }

  > .close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
  }

  &.show {
    visibility: visible;
    transform: translateX(0);
  }

  .module-logo {
    text-align: center;
    padding: 5rem 2rem;
    display: block;

    a {
      position: relative;
      display: inline-block;
    }

    img {
      width: 160px;
      height: 100px;
      object-fit: contain;

      &:nth-child(2) {
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    &.light {
      background-color: $color-light;

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
  }

  .module-navigation {
    padding: 1rem 1.5rem;
  }

  .module-actions {
    margin-top: auto;
  }

  .module-social {
    padding: 2rem 1rem;
    text-align: center;
  }

  .module-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
  }
}
</style>
