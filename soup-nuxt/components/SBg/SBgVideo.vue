<template>
  <video class="bg-video" :class="{ transparent }" autoplay playsinline loop>
    <source src="../../static/video.mp4" type="video/mp4" />
  </video>
</template>

<script>
/**
 * Background video component
 */
export default {
  name: 'SBgVideo',
  props: {
    /**
     * Video's object to play (.MP4)
     */
    video: {
      type: Object,
      required: true
    },
    /**
     * Adds transparency to the video
     */
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 1;
  object-fit: cover;

  &.transparent {
    opacity: 0.5;
  }
}
</style>
