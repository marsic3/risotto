<template>
  <!-- Body Wrapper -->
  <div id="body-wrapper">
    <!-- Content -->
    <s-content class="bg-light">
      <!-- Page Content -->
      <s-section size="lg" bg="light">
        <b-container>
          <b-row>
            <b-col lg="8" :offset-lg="headerLogoStyle === 'VERTICAL' ? 4 : 0">
              <span class="icon icon-xl icon-danger">
                <i class="ti ti-plug"></i>
              </span>
              <h1 class="mb-3">Ooops...</h1>
              <p class="lead text-muted mb-5">It seems that is an error with the app...</p>
              <s-button variant="secondary" to="/">Back to Home</s-button>
            </b-col>
          </b-row>
        </b-container>
      </s-section>
    </s-content>

    <!-- Cookies Bar -->
    <s-cookies-bar />

    <!-- Customizer -->
    <s-customizer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Color from 'color'

export default {
  name: 'LayoutError',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SButton: () => import('@/components/SButton/SButton'),
    SSection: () => import('@/components/SSection/SSection'),
    SCookiesBar: () => import('@/components/SCookiesBar/SCookiesBar'),
    SCustomizer: () => import('@/components/SCustomizer')
  },
  computed: {
    ...mapState('theme', ['themeColor', 'themeInverted', 'themeBodyPadded', 'footerType', 'headerLogoStyle'])
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
