<template>
  <div class="s-form-radio" :class="{ disabled }">
    <input class="s-form-radio-input" :id="id" type="radio" ref="input" @change="change" :checked="typeof checked === typeof true ? checked : value === checked" :value="value" :disabled="disabled" :name="name" />
    <label :for="id" class="s-form-radio-label">
      <div class="s-form-radio-indicator">
        <svg class="icon" x="0px" y="0px" viewBox="0 0 32 32">
          <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="whiteFFF" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
        </svg>
      </div>
      <slot />
    </label>
  </div>
</template>

<script>
/**
 * Custom radio component with animated tick icon.
 */
export default {
  name: 'SFormRadio',
  model: {
    event: 'change',
    prop: 'checked'
  },
  props: {
    /**
     * ID of an element
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Name of an input
     */
    name: {
      type: String
    },
    /**
     * Radio's value
     * @model
     */
    value: {
      type: [String, Number, Object]
    },
    /**
     * Set's checked attribute of input
     */
    checked: {
      type: [Boolean, String]
    },
    /**
     * Disables element
     */
    disabled: {
      type: Boolean
    }
  },
  methods: {
    change($event) {
      if (typeof this.checked === typeof true) {
        /**
         * Change event
         * @event change
         * @type {boolean, array}
         */
        this.$emit('change', $event.target.checked)
      } else {
        if ($event.target.checked) {
          /**
           * Change event
           * @event change
           * @type {boolean, array}
           */
          this.$emit('change', this.value)
        } else {
          return
        }
      }
    }
  }
}
</script>

<style lang="scss">
.s-form-radio {
  &.disabled {
    opacity: 0.6;
    pointer-events: not-allowed;
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .s-form-radio-input {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    display: none;

    &:disabled + .s-form-radio-label {
      cursor: not-allowed;
    }

    &:checked + .s-form-radio-label > .s-form-radio-indicator {
      > svg > path {
        stroke-dashoffset: 0;
      }
    }

    &:focus + .s-form-radio-label > .s-form-radio-indicator {
      box-shadow: none;
    }
  }

  .s-form-radio-label {
    cursor: pointer;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    font-weight: 400;

    .s-form-radio-indicator {
      position: relative;
      top: 0.1em;
      font-weight: 400;
      font-family: $font-secondary;
      width: 1.3em;
      flex: 0 0 1.3em;
      height: 1.3em;
      min-width: 1.3em;
      margin-right: 0.5rem;
      border-radius: 50%;
      border: 2px solid $color-line;
      background-color: transparent;
      display: inline-block;

      > svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        > path {
          @include transition-primary;
          stroke: $color-primary;
        }
      }
    }
  }
}
</style>
