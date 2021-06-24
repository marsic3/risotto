<template>
  <ul class="meta">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
/**
 * Meta data informations.
 */
export default {
  name: 'SMeta',
  components: {
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  props: {
    /**
     * Array with `string` type data to display.
     */
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
ul.meta {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: block;

  > li {
    display: inline-block;
    font-size: 12px;
    color: $color-muted;
    font-weight: 500;

    > span {
      opacity: 0.7;
    }

    &:not(:last-child) {
      margin-right: 8px;

      &::after {
        content: '/';
        margin-left: 8px;
        font-size: 60%;
        opacity: 0.7;
      }
    }
  }
}
</style>
