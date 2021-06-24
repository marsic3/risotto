<template>
  <b-button :class="{ 'btn-wide': wide }" :to="to || null" :block="block" :variant="variant" :size="size" @click="onClick" :disabled="disabled">
    <span>
      <!-- @slot Button label -->
      <slot />
    </span>
  </b-button>
</template>

<script>
/**
 * Basic Button
 */
export default {
  name: 'SButton',
  props: {
    /**
     * Variant of a button
     * @values primary, primary-light, primary-dark, secondary, info, warning, danger, success, dark, light, outline-primary, outline-primary-light, outline-primary-dark, outline-secondary, outline-info, outline-warning, outline-danger, outline-success, outline-dark, outline-light
     */
    variant: {
      type: [Boolean, String],
      default: 'primary'
    },
    /**
     * Size of a button
     * @values md, sm, lg
     */
    size: {
      type: String,
      default: 'md'
    },
    /**
     * Makes button fullwidth of a container
     */
    block: {
      type: Boolean,
      default: false
    },
    /**
     * Adds minimum width to the button
     */
    wide: {
      type: Boolean,
      default: false
    },
    /**
     * Disables button
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     *  Sets route if necessary
     */
    to: {
      type: [Boolean, Object, String],
      default: false
    }
  },
  methods: {
    onClick(e) {
      e.target.blur()
      if (!this.to) {
        /**
         * Click event
         * @event click
         */
        this.$emit('click')
      }
    }
  }
}
</script>
