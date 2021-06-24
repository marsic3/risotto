<template>
  <div class="offer">
    <div class="offer-image">
      <img :src="item.image.url" alt="" />
    </div>
    <div class="offer-content">
      <h2 class="mb-2">{{ item.name }}</h2>
      <h5 class="text-muted mb-5">{{ item.description }}</h5>
      <ul class="list-check text-lg mb-0">
        <li v-for="(condition, listIndex) in item.conditions" :key="listIndex" :class="{ false: !condition.active }">{{ condition.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

/**
 * Special offer record with conditions detection.
 */
export default {
  name: 'SOffer',
  props: {
    /**
     * Offer data object
     */
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('cart', ['items', 'productsTotal'])
  }
}
</script>

<style lang="scss">
.offer {
  margin-bottom: 30px;

  @include media('>md') {
    display: flex;
  }

  .offer-image {
    position: relative;
    width: 50%;
    z-index: 1;

    @include media('<=md') {
      width: auto;
      float: none;
    }
  }

  .offer-content {
    position: relative;
    width: 55%;
    margin-left: -5%;
    margin-top: 5%;
    float: left;
    background-color: $color-light;
    padding: 4rem;
    z-index: 2;

    @include media('<=md') {
      float: none;
      width: auto;
      margin-left: 5%;
      margin-top: -5%;
      padding: 3rem;
    }

    .bg-light & {
      background-color: $color-body;
    }
  }
}
</style>
