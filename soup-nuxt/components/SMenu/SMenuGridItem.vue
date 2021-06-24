<template>
  <div class="menu-item menu-grid-item">
    <img v-if="item.image" class="mb-4" :src="item.image.url" alt="" />
    <h6 class="mb-1">{{ item.name }}</h6>
    <span class="text-muted text-sm">{{ item.description }}</span>
    <div class="text-md mt-3 mb-4">
      <span class="text-muted" v-if="(item.options && item.options.length > 0) || (item.additions && item.additions.length > 0)">from</span>
      {{ getCurrency(item.price) }}
    </div>
    <s-button size="sm" variant="outline-secondary" @click="showModal({ item: item, mode: 'ADD' })">Add to cart</s-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

/**
 * Menu grid item
 */
export default {
  name: 'SMenuGridItem',
  components: {
    SButton: () => import('@/components/SButton/SButton')
  },
  props: {
    /**
     * Menu items data
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
.menu-grid-item {
  margin-bottom: 1.5rem;
}
</style>

<docs>
Sample data structure for `item` prop:
```json
{
  "id": 1,
  "categoryId": 1,
  "name": "American Classic",
  "image": "http://assets.suelo.pl/soup/img/products/product-burger.jpg",
  "description": "Beef, Cheese, Potato, Onion, Fries",
  "price": 9,
  "options": [],
  "additions": []
}

```
</docs>
