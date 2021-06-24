<template>
  <div class="rate mb-5" :class="`rate-${size}`">
    <i class="fa fa-star" v-for="(icon, index) in 5" :key="index" :class="{ active: index < value }"></i>
  </div>
</template>

<script>
/**
 * Five stars rate range.
 */
export default {
  name: 'SSRate',
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style lang="scss">
.rate {
  > i {
    margin-right: 0.5em;

    color: $color-medium;

    &.active {
      color: $color-gold !important;
    }
  }

  &.rate-lg {
    font-size: 1.3em;
  }

  &.rate-sm {
    font-size: 0.8em;
  }
}

.inverted .rate {
  > i {
    color: rgba(white, 0.4);
  }
}

.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: left;

  > i {
    cursor: pointer;

    &:hover {
      &,
      ~ i {
        color: $color-gold;
      }
    }
  }
}
</style>
