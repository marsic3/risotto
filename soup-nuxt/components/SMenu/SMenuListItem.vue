<template>
  <div class="menu-item menu-list-item">
    <b-row class="align-items-center">
      <b-col sm="6" class="mb-2 mb-sm-0">
        <h6 class="mb-0">{{ item.name }}</h6>
        <span class="text-muted text-sm">{{ item.description }}</span>
      </b-col>
      <b-col sm="6" class="text-sm-right">
        <span class="text-md mr-4">
          <span class="text-muted" v-if="(item.options && item.options.length > 0) || (item.additions && item.additions.length > 0)">from</span>
          {{ getCurrency(item.price) }}
        </span>
        <s-button size="sm" variant="outline-secondary" @click="showModal({ item: item, mode: 'ADD' })">Add to cart</s-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

/**
 * Menu list item
 */
export default {
  name: 'SMenuListItem',
  components: {
    SButton: () => import('@/components/SButton/SButton')
  },
  props: {
    /**
     * Menu item data
     * @type {Object}
     */
    item: {
      type: Object
    }
  },
  methods: {
    ...mapActions('cart', ['showModal'])
  }
}
</script>

<style lang="scss">
.menu-list-item {
  padding: 1.25rem 1.5rem;
  line-height: 1.2;

  @include media('<=xs') {
    padding: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid $color-line;
  }
}
</style>

<docs>
Sample data structure for `item` prop:
```json
{
  "id": 1,
  "categoryId": 1,
  "name": "American Classic",
  "image": null,
  "description": "Beef, Cheese, Potato, Onion, Fries",
  "price": 9,
  "options": [],
  "additions": []
}

```
</docs>
