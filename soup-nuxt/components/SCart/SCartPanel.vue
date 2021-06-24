<template>
  <div id="cart" :class="{ show: showPanel }">
    <div class="cart-container">
      <div class="cart-title">
        <h5 class="title">Your Cart</h5>
        <b-button-close @click.prevent="hidePanel()" />
      </div>
      <div class="cart-content">
        <s-cart-table />
      </div>
    </div>
    <s-button :to="{ name: 'checkout' }" class="cart-action" block variant="secondary" size="lg" :disabled="items.length === 0 || productsTotal < minimumCartValue">Go to checkout</s-button>
  </div>
</template>

<script>
import SButton from '@/components/SButton/SButton'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

/**
 * Cart Panel which slides in from the side of a screen.
 */
export default {
  name: 'SCartPanel',
  components: {
    SButton,
    SCartTable: () => import('./SCartTable')
  },
  computed: {
    ...mapGetters('cart', ['showPanel', 'items', 'deliveryPrice', 'orderTotal', 'productsTotal', 'discountsTotal', 'activeOffers']),
    ...mapGetters('menu', ['activeOffers']),
    ...mapState('settings', ['minimumCartValue'])
  },
  methods: {
    ...mapActions('cart', ['hidePanel', 'showModal', 'removeItem', 'updateOffers']),
    ...mapActions('menu', ['updateOffers'])
  },
  watch: {
    $route() {
      this.hidePanel()
    }
  },
  created() {
    this.updateOffers()
  }
}
</script>

<style lang="scss">
#cart {
  @include transition-secondary;
  @include theme-default;
  @include fullheight;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  color: $color-dark;
  width: 370px;
  z-index: 950;
  box-shadow: 0 0 30px 0 rgba(black, 0.1);
  font-size: 0.95rem;
  visibility: hidden;
  transform: translateX(100%);

  @include media('<=xs') {
    width: 100%;
  }

  &.show {
    visibility: visible;
    transform: translateX(0);
  }

  .cart-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 90px;
    overflow: auto;
    z-index: 2;
    background-color: white;
  }

  .cart-title {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background-color: $color-light;

    .title {
      margin-bottom: 0;
    }

    .close {
      margin-left: auto;
    }
  }

  .cart-action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    white-space: nowrap;
    z-index: 3;

    &:hover,
    &:focus {
      transform: translateY(0);
    }
  }

  .cart-summary {
    padding: 1.5rem;
  }
}
</style>
