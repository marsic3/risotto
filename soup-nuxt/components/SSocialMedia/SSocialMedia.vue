<template>
  <div class="social-media">
    <a v-for="(item, index) in media" :key="index" :href="item.url" class="icon icon-social icon-circle icon-sm" :class="`icon-${item.type}`">
      <i class="fa" :class="`fa-${item.type}`"></i>
    </a>
  </div>
</template>

<script>
/**
 * Social media icons list.
 */
export default {
  name: 'SSocialMedia',
  props: {
    media: {
      type: Array,
      requierd: true
    }
  }
}
</script>

<style lang="scss">
.social-media {
  a {
    &:not(last-child) {
      margin-right: 0.2em;
    }
  }
}
</style>
