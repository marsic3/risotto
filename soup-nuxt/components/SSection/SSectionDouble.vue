<template>
  <s-section :theme="theme" :bg="bg" class="section-double">
    <b-row class="no-gutters" :class="{ 'flex-row-reverse': reverse }">
      <b-col xl="4" md="5" class="content">
        <h2 v-if="content.title">{{ content.title }}</h2>
        <p v-if="content.description" class="lead text-muted">{{ content.description }}</p>
        <s-button v-if="content.link" :to="content.link.slug" variant="outline-primary" size="lg">{{ content.link.title }}</s-button>
      </b-col>
      <b-col xl="8" md="7" class="image">
        <s-bg-image :image="image" />
      </b-col>
    </b-row>
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with content and image on the opposite sides
 */
export default {
  name: 'SSectionDouble',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton')
  },
  props: {
    /**
     * Content to display
     * @type {Object}
     */
    content: {
      type: Object
    },
    /**
     * Image's object to display
     */
    image: {
      type: Object
    },
    /**
     * Moves image to left and content to the right side
     */
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showVideo: false
    }
  }
}
</script>

<style lang="scss">
.section-double {
  padding-top: 0;
  padding-bottom: 0;

  > .row {
    height: 35vw;
    align-items: center;

    @include media('<=xl') {
      height: 70vh;
    }

    @include media('<=lg') {
      height: 70vh;
    }

    @include media('<=sm') {
      height: auto;
    }

    > .image {
      position: relative;
      height: 100%;
      background-color: $color-light;

      @include media('<=sm') {
        height: 60vh;
      }

      &.right > .bg-image {
        background-position: left center;
      }

      &.left > .bg-image {
        background-position: right center;
      }

      .btn-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }

    > .content {
      padding: 4rem 8%;
    }
  }
}
</style>
