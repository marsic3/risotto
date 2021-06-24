<template>
  <s-section size="lg" :theme="theme" :bg="bg">
    <s-bg-image v-if="image" :image="image" />

    <b-container class="text-center">
      <b-row class="justify-content-center">
        <b-col lg="8">
          <h2 class="mb-3">{{ title }}</h2>
          <h5 v-if="tagline" class="text-muted">{{ tagline }}</h5>
          <s-button-play v-if="modalVideo" @click="showVideo = true"></s-button-play>
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
 * Section with call to action and possibility to show a video in the modal
 */
export default {
  name: 'SSectionCta',
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
     * Video's URL to play in modal
     */
    modalVideo: {
      type: [Boolean, String],
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
      showVideo: false
    }
  }
}
</script>
