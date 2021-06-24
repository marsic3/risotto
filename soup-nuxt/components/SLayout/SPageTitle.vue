<template>
  <div class="page-title" :class="[theme]">
    <s-bg-video v-if="media.type === 'video'" :video="media.source" />
    <s-bg-image v-else-if="media.type === 'image'" :image="media.source" />
    <b-container>
      <b-row>
        <b-col lg="8" :offset-lg="headerLogoStyle === 'VERTICAL' ? 4 : 0">
          <h1 class="mb-0">{{ title }}</h1>
          <h4 v-if="tagline" class="text-muted mb-0">{{ tagline }}</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

/**
 * Main page title with many customizations.
 */
export default {
  name: 'SPageTitle',
  components: {
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  props: {
    /**
     * Title to display
     */
    title: {
      type: String,
      required: true,
      default: 'Page Title'
    },
    /**
     * Color scheme
     * @values light, dark, inverted
     */
    theme: {
      type: String,
      default: 'light'
    },
    /**
     * Tagline to display
     */
    tagline: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Image or video object to show in the background
     */
    media: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    ...mapState('theme', ['headerLogoStyle'])
  }
}
</script>

<style lang="scss">
.page-title {
  position: relative;
  padding: 6rem 0 7rem;

  @include media('<=xl') {
    padding: 4rem 0 5rem;
  }

  &.light {
    background-color: $color-light;

    + .section.light {
      padding-top: 0;
    }
  }

  &.dark {
    background-color: $color-extra-dark;
  }

  &.page-title-lg {
    padding: 9rem 0;

    @include media('<=xl') {
      padding: 6rem 0;
    }
  }

  h1 {
    font-size: 5.5rem;

    @include media('<=xl') {
      font-size: 4.75rem;
    }

    @include media('<=md') {
      font-size: 4rem;
    }

    @include media('<=xs') {
      font-size: 3.5rem;
    }
  }
}
</style>
