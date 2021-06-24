<template>
  <s-section size="lg" theme="dark" bg="dark">
    <s-bg-image :image="image" />

    <b-container>
      <b-row>
        <b-col md="6" offset="md-3">
          <s-button-play v-if="modalVideo" @click="showVideo = true" class="mb-5"></s-button-play>
          <h2 class="display-2">{{ title }}</h2>
          <h4 class="text-muted mb-5">{{ tagline }}</h4>
          <s-button v-if="link" :to="{ name: link.path }" size="lg" variant="outline-primary">{{ link.title }}</s-button>
        </b-col>
      </b-row>
    </b-container>

    <s-video-modal v-if="modalVideo" :video-url="modalVideo" :show="showVideo" @hidden="showVideo = false" />
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with call to action and possibility to show a video in the modal #2
 */
export default {
  name: 'SSectionCtaAlternative',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton'),
    SButtonPlay: () => import('@/components/SButton/SButtonPlay'),
    SVideoModal: () => import('@/components/SVideoModal')
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
     * Image's URL to show in the background
     */
    image: {
      type: [Boolean, Object],
      default: false
    },
    /**
     * Link to display as a button
     */
    link: {
      type: [Boolean, Object],
      default: false
    },
    /**
     * Video's URL to play in modal
     * @type {Array}
     */
    modalVideo: {
      type: [Boolean, String],
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
