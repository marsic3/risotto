<template>
  <nav class="module module-navigation">
    <ul class="nav" :class="`nav-main-${type}`">
      <slot />
    </ul>
  </nav>
</template>

<script>
/**
 * Main navigation container.
 */
export default {
  name: 'SNavigation',
  props: {
    /**
     * Navigation type
     * @values desktop, mobile
     */
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
