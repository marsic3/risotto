<template>
  <s-section class="section-hero section-hero-centered" bg="dark" theme="dark">
    <s-bg-video v-if="media.type === 'video'" :video="media.source" transparent />
    <s-bg-image v-else-if="media.type === 'image'" :image="media.source" transparent />
    <client-only>
      <b-container class="container v-center text-center">
        <img :src="headerLogoLight" alt="..." class="logo mb-5" />
        <h1 class="display-2 mb-2">{{ title }}</h1>
        <h4 v-if="tagline" class="text-muted mb-5">{{ tagline }}</h4>
        <s-button v-if="link" size="lg" variant="outline-primary" @click="goToMenu">{{ link.title }}</s-button>
      </b-container>
    </client-only>
  </s-section>
</template>

<script>
import { mapState } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Hero sectiom with centered content and video or image in the background
 */
export default {
  name: 'SSectionHeroCentered',
  mixins: [section],
  components: {
    SSection,
    SBgVideo: () => import('@/components/SBg/SBgVideo'),
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton')
  },
  props: {
    /**
     * Section's title
     */
    title: {
      type: String,
      required: true,
      default: 'Sample title'
    },
    /**
     * Section's tagline
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
    },
    /**
     * Link to display as a button
     */
    link: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    ...mapState('theme', ['headerLogoLight'])
  },
  data() {
    return {
      activeSlide: 0
    }
  },
  methods: {
    goToMenu() {
      this.$router.push({path: '/menu-grid-navigation'})
    }
  }
}
</script>

<style lang="scss">
.section-hero-centered {
  @include section-hero;

  .logo {
    max-height: 100px;
    max-width: 180px;
  }

  @include media('<=lg') {
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
}
</style>
