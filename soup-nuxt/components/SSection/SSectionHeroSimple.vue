<template>
  <s-section class="section-hero section-hero-simple" bg="dark" theme="dark">
    <s-bg-video v-if="media.type === 'video'" :video="media.source" />
    <s-bg-image v-else-if="media.type === 'image'" :image="media.source" />
    <client-only>
      <b-container class="container v-center">
        <b-row>
          <b-col md="8" offset="md-3">
            <h1 class="display-1">{{ title }}</h1>
            <h4 v-if="tagline" class="text-muted mb-5">{{ tagline }}</h4>
            <s-button v-if="link" :to="{ name: link.path }" size="lg" variant="outline-primary">{{ link.title }}</s-button>
          </b-col>
        </b-row>
      </b-container>
    </client-only>
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Simple hero section with image in the background
 */
export default {
  name: 'SSectionHeroSimple',
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
     * Image or video Object to show in the background
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
  data() {
    return {
      activeSlide: 0
    }
  },
  methods: {
    prevSlide() {
      if (this.activeSlide > 0) this.activeSlide--
      else if (this.activeSlide === 0) this.activeSlide = this.slides.length - 1
    },
    nextSlide() {
      if (this.activeSlide < this.slides.length - 1) this.activeSlide++
      else this.activeSlide = 0
    },
    updateCarousel(page) {
      this.activeSlide = page
    }
  }
}
</script>

<style lang="scss">
.section-hero-simple {
  @include section-hero;

  @include media('<=lg') {
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
}
</style>
