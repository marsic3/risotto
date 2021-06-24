export default {
  props: {
    /**
     * Section's background color
     * @values primary, primary-light, primary-dark, secondary, info, warning, danger, success, dark, light, transparent
     */
    bg: {
      type: String,
      default: 'transparent'
    },
    /**
     * Section's color scheme
     * @values light, dark, inverted
     */
    theme: {
      type: String,
      default: 'default'
    }
  }
}
