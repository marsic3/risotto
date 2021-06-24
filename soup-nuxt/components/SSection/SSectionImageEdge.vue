<template>
  <s-section class="section-bg-edge">
    <b-col md="6" class="image" :class="{ left: reverse, right: !reverse, bottom }">
      <s-bg-image :image="image" />
    </b-col>

    <b-container>
      <b-col v-if="content" lg="5" md="9" class="content" :class="{ 'offset-lg-6': reverse }">
        <s-rate v-if="content.rate" class="mb-5" :value="content.rate" size="lg" />
        <h1>{{ content.title }}</h1>
        <p class="lead text-muted mb-5">{{ content.description }}</p>
        <h6 v-if="content.author">{{ content.author }}</h6>
        <img v-if="content.sign" :src="content.sign" alt="..." class="mb-5" />
        <!-- Reviews -->
        <div v-if="content.reviews && content.reviews.length > 0" class="blockquotes">
          <s-blockquote data-animation="fadeInLeft" v-for="(review, index) in content.reviews" :key="index" :item="review" :odd="index % 2 === 1" />
        </div>
        <!-- Features -->
        <template v-if="content.features && content.features.length > 0">
          <s-feature v-for="(item, index) in content.features" :key="index" :icon="item.icon" :title="item.title" :description="item.description" />
        </template>
      </b-col>
    </b-container>
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with image in the edge and contained content
 */
export default {
  name: 'SSectionImageEdge',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SBlockquote: () => import('@/components/SBlockquote'),
    SRate: () => import('@/components/SRate'),
    SFeature: () => import('@/components/SFeature')
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
     * @type {String}
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /**
     * Pins image to bottom edge of the section
     * @type {String}
     */
    bottom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section.section-bg-edge {
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  width: 100%;

  .image {
    position: absolute;
    top: 0;
    bottom: 0;
    padding-left: 0;
    padding-right: 0;

    @include media('<=sm') {
      left: 0;
      right: 0;
      opacity: 0.25;
    }

    &.right {
      margin-left: auto;
      text-align: right;
      right: 0;
      mask-image: linear-gradient(to left, black 40%, rgba(black, 0));

      .bg-image {
        background-position: center left;
      }
    }

    &.left {
      text-align: left;
      left: 0;
      mask-image: linear-gradient(to right, black 40%, rgba(black, 0));

      .bg-image {
        background-position: center right;
      }
    }

    &.bottom {
      .bg-image {
        background-position-y: top !important;
      }
    }
  }

  .content {
    &.right {
      margin-left: auto;
    }
  }

  .container > div[class*='col-'] {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  &.section-sm {
    .container > div[class*='col-'] {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }
  }

  &.section-lg {
    padding-top: 0;
    padding-bottom: 0;

    .container > div[class*='col-'] {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
}
</style>
