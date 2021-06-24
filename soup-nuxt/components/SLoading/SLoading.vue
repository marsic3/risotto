<template>
  <transition name="fade">
    <div class="loading" v-if="loading"></div>
  </transition>
</template>

<script>
/**
 * Main page loader
 */
export default {
  name: 'SLoading',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    /**
     * Start loader animation
     */
    start() {
      this.loading = true
    },
    /**
     * Finish loader animation
     */
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2px;
  z-index: 1000;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    background-color: $color-primary;
    content: ' ';
    width: 33.333%;
    height: 100%;
    animation: 2s loading infinite linear;
    @keyframes loading {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(400%);
      }
    }
  }
}
</style>
