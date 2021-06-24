<template>
  <footer id="footer" class="bg-dark dark">
    <b-container>
      <b-row class="footer-second-row align-items-center">
        <b-col lg="4" class="text-center text-md-left">
          <span class="text-sm text-muted">Copyright {{ name }} {{ new Date().getFullYear() }}©. Made with love by <a href="http://suelo.pl" target="_blank">Suelo</a>.</span>
        </b-col>
        <b-col lg="4" class="module-logo text-center">
          <img :src="footerLogo" alt="" class="mt-5 mb-5" />
        </b-col>
        <b-col lg="4" md="6" class="text-center text-md-right">
          <s-social-media :media="socialMedia" />
        </b-col>
      </b-row>
    </b-container>

    <!-- Back To Top -->
    <a href="#" id="back-to-top"><i class="ti ti-angle-up"></i></a>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

/**
 * Simple and clean footer with logotype and social media.
 */
export default {
  name: 'SFooterSimple',
  components: {
    SSocialMedia: () => import('@/components/SSocialMedia')
  },
  computed: {
    ...mapState('settings', ['name', 'socialMedia']),
    ...mapState('theme', ['footerLogo'])
  }
}
</script>

<style lang="scss" scoped>
#footer {
  @include media('<=xs') {
    padding-bottom: 2rem;
  }

  .module-logo {
    img {
      max-width: 150px;
      max-height: 110px;
    }
  }

  .footer-first-row {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;

    @include media('<=xl') {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  .footer-second-row {
    border-top: 1px solid $color-line-inverted;
    font-size: 0.9em;
    padding-top: 3rem;
    padding-bottom: 3rem;

    @include media('<=xl') {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
}

/* Back to top */

#back-to-top {
  @include transition-primary;
  position: absolute;
  bottom: 18px;
  right: 18px;
  border-radius: 50%;
  color: white;
  width: 36px;
  height: 36px;
  background: $color-dark;
  font-size: 14px;
  z-index: 650;

  @include media('<=sm') {
    bottom: 20px;
    right: 20px;
  }

  &:hover {
    transform: translateY(-3px);
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
