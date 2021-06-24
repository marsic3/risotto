<template>
  <div class="page-content">
    <slot />
  </div>
</template>

<script>
/**
 * Main page content wrapper.
 */
export default {
  name: 'SPageContent'
}
</script>

<style lang="scss">
.page-content {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
