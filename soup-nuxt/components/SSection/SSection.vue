<template>
  <section class="section" :class="[`section-${size}`, `bg-${bg}`, theme, { cover: cover, protrude: protrude }]">
    <!-- @slot Main slot of the section -->
    <slot />
  </section>
</template>

<script>
import section from '../../mixins/section'

/**
 * Base components for each section.
 */
export default {
  name: 'SSection',
  mixins: [section],
  props: {
    /**
     * Size of section's paddings
     * @values sm, lg
     */
    size: {
      type: String,
      default: 'md'
    },
    /**
     * Removes paddings from section
     * @values true, false
     */
    cover: {
      type: Boolean,
      default: false
    },
    /**
     * Increases z-index of the section
     * @values true, false
     */
    protrude: {
      type: Boolean,
      default: false
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

  .section-header {
    margin-bottom: 5rem;

    @include media('<=xl') {
      margin-bottom: 4rem;
    }
  }
}
</style>
