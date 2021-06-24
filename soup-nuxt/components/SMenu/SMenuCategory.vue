<template>
  <div class="menu-category">
    <!-- <div class="menu-category-title" :class="{ 'collapse-toggle': collapsible, collapsed: collapsed }" :aria-expanded="!collapsed" @click="collapsed = !collapsed">
      <s-bg-image :image="image" />
      <h2 class="title">{{ name }}</h2>
    </div> -->
    <slide-up-down v-if="collapsible" :active="!collapsed" :duration="400" class="menu-category-content" :class="{ padded }">
      <div class="menu-category-content-inner" :class="{ padded }">
        <!-- @slot Main slot for menu items -->
        <slot />
      </div>
    </slide-up-down>
    <div v-else class="menu-category-content">
      <div class="menu-category-content-inner" :class="{ padded }">
        <!-- @slot Main slot for menu items -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'

/**
 * Menu list with cover image.
 */
export default {
  name: 'SMenuCategory',
  components: {
    SlideUpDown,
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  props: {
    /**
     * Category name
     */
    name: {
      type: String
    },
    /**
     * Cover Image's object
     */
    image: {
      type: Object
    },
    /**
     * Adds padding to the menu list
     */
    padded: {
      type: Boolean
    },
    /**
     * Makes a collapsible panel
     */
    collapsible: {
      type: Boolean
    },
    /**
     * Shows the content at init if collapsible
     */
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      collapsed: true
    }
  },
  created() {
    if (this.open) this.collapsed = false
  }
}
</script>

<style lang="scss">
.menu-category {
  margin-bottom: 2rem;

  .menu-category-title {
    position: relative;
    height: 25vh;
    min-height: 160px;
    color: white;
    padding: 3rem;
    background-color: $color-dark;

    @include media('<=md') {
      min-height: 100px;
    }

    .bg-image:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: ' ';
      background-image: linear-gradient(to top, rgba(black, 0.5), rgba(black, 0));
    }

    .title {
      position: absolute;
      bottom: 3rem;
      left: 4rem;
      font-size: 5rem;
      z-index: 2;
      margin-bottom: 0;

      @include media('<=xl') {
        font-size: 4.5rem;
      }

      @include media('<=md') {
        font-size: 4rem;
        bottom: 2rem;
        left: 3rem;
      }

      @include media('<=md') {
        font-size: 3rem;
        left: 2rem;
      }
    }

    &.collapse-toggle {
      @include transition-primary;
      cursor: pointer;

      &::after {
        @include transition-primary;
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        font-family: 'themify-icons';
        content: '\e64b';
        display: inline-block;
        font-size: 3rem;
        opacity: 0.5;
        z-index: 2;

        @include media('<=xl') {
          bottom: 2.5rem;
        }

        @include media('<=md') {
          right: 2rem;
          bottom: 2rem;
          font-size: 2rem;
        }
      }

      &[aria-expanded='true'] {
        &::after {
          transform: rotateX(180deg);
        }
      }
    }
  }

  .menu-category-content {
    border: 1px solid $color-line;

    [data-theme-inverted='false'] {
      background-color: white;
    }

    .menu-category-content-inner {
      &.padded {
        padding: 15px 15px 0;
      }
    }
  }
}
</style>
