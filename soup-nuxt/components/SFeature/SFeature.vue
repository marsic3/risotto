<template>
  <div class="feature">
    <div class="feature-icon icon icon-primary"><i class="ti" :class="[`ti-${icon}`]"></i></div>
    <div class="feature-content">
      <h4 class="mb-2">{{ title }}</h4>
      <p class="text-muted mb-0">{{ description }}</p>
    </div>
  </div>
</template>

<script>
/**
 * Component with icon, title and description to visualize a feature or order step.
 */
export default {
  name: 'SFeature',
  props: {
    /**
     * Icon name from [Themify Icons](https://themify.me/themify-icons) package.
     */
    icon: {
      type: String,
      default: 'tick'
    },
    /**
     * Feature's title
     */
    title: {
      type: String,
      default: 'Sample title'
    },
    /**
     * Feature's description
     */
    description: {
      type: String,
      default: 'Sample description'
    }
  }
}
</script>

<style lang="scss">
.feature {
  margin-bottom: 2rem;
  display: block;

  .feature-content {
    padding-left: 65px;
    padding-top: 1.25rem;
  }

  .icon {
    float: left;

    &.icon-sm + .feature-content {
      padding-left: 55px;
    }

    &.icon-lg + .feature-content {
      padding-left: 120px;
    }

    &.icon-circle {
      + .feature-content {
        padding-left: 95px;
      }

      &.icon-sm + .feature-content {
        padding-left: 64px;
      }

      &.icon-lg + .feature-content {
        padding-left: 140px;
      }
    }
  }
}
</style>
