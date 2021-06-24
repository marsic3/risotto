<template>
  <div class="bg-image" :style="{ 'background-image': `url(${size && image.sizes ? image.sizes[size] : image.url})` }" :class="{ transparent: transparent }"></div>
</template>

<script>
/**
 * Background image component
 */
export default {
  name: 'SBgImage',
  props: {
    /**
     * Image's object to display
     */
    image: {
      type: Object,
      required: true
    },
    /**
     * Adds transparency to the image
     */
    transparent: {
      type: Boolean,
      default: false
    },
    /**
     * Image size to display
     * @values sm, md, lg, xl
     */
    size: {
      type: [Boolean, String],
      default: false
    }
  }
}
</script>

<style lang="scss">
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;

  &.transparent {
    opacity: 0.4;
  }
}
</style>
