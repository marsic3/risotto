<template>
  <div class="s-select">
    <select class="form-control" @input="change">
      <option v-for="(option, index) in computedOptions" :key="index" :value="option.id" :selected="option.id === computedValue.id">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
/**
 * Custom select component.
 */
export default {
  name: 'SFormSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Select value
     */
    value: {
      type: [String, Number, Object],
      required: false,
      default: null
    },
    /**
     * Options list
     */
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    /**
     * Options adapter which transform the options list and value
     */
    optionAdapter: {
      type: Function,
      default: item => ({
        id: item,
        label: item,
        item
      })
    }
  },
  computed: {
    computedOptions() {
      return this.options.map(x => this.optionAdapter(x))
    },
    computedValue() {
      return this.optionAdapter(this.value)
    }
  },
  methods: {
    change(option) {
      /**
       * Change event
       * @event change
       * @type {string, number, object}
       */
      this.$emit('change', this.computedOptions.find(x => x.id == option.target.value).item)
    }
  }
}
</script>

<style lang="scss">
.s-select {
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    display: block;
    transform: translate3d(0, -50%, 0);
    right: 13px;
    font-size: 0.8rem;
    color: $color-global;
    font-family: 'themify-icons';
    content: '\e62a';
  }
}

select.form-control:not([size]):not([multiple]) {
  height: calc(3.25rem + 4px);
}
</style>
