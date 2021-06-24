export default {
  methods: {
    getInputState(v) {
      return v.errors && (v.dirty || v.validated) ? v.errors.length === 0 : null
    }
  }
}
