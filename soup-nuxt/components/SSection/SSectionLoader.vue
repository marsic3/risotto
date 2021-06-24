<template>
  <component :is="loadSection" v-bind="props" />
</template>

<script>
/**
 * Section loader with dynamic name
 */
export default {
  name: 'SSectionLoader',
  props: {
    /**
     * Section's name to load
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Section's prosp to pass
     */
    props: {
      type: Object,
      required: true
    }
  },
  computed: {
    loadSection() {
      return () => import(`@/components/SSection/SSection${this.name}`)
    }
  }
}
</script>

<style lang="scss">
.section {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @include media('<=xl') {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &.cover {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.section-lg {
    padding-top: 8em;
    padding-bottom: 8rem;

    @include media('<=xl') {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  &.section-sm {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;

    @include media('<=xl') {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem;
    }
  }

  &.protrude {
    z-index: 2;
  }

  &.extended {
    overflow: hidden;
    padding-top: 0;
    background-color: transparent !important;
    padding-bottom: 0;

    > .container {
      position: relative;
      padding-top: 6rem;
      padding-bottom: 6rem;

      &::after {
        position: absolute;
        top: 0;
        width: 100vw;
        bottom: 0;
        content: ' ';
        background-color: $color-dark;
      }

      > * {
        position: relative;
        z-index: 2;
      }
    }

    &.right > .container:after {
      left: -60px;
    }

    &.left > .container:after {
      right: -60px;
    }
  }
}
</style>
