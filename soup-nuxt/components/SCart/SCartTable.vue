<template>
  <client-only>
    <div class="cart-table-container">
      <template v-if="items.length > 0">
        <table class="cart-table">
          <tbody>
            <!-- Items -->
            <tr v-for="(item, index) in items" :key="`item_${index}`">
              <td class="title">
                <span class="name">{{ item.name }}</span>
                <div class="detail" v-for="(option, index) in item.activeOptions" :key="`option_${index}`">
                  {{ option.name }}: <span>{{ option.value.name }}</span>
                </div>
                <div class="detail" v-if="item.activeAdditions && item.activeAdditions.length > 0">
                  Additions: <span v-for="(addition, index) in item.activeAdditions" :key="`addition${index}`">{{ addition.name }}</span>
                </div>
              </td>
              <td class="price">{{ getCurrency(item.totalPrice) }}</td>
              <td class="actions">
                <a href="#" class="action-icon" @click.prevent="showModal({ item, mode: 'EDIT' })"><i class="ti ti-pencil"></i></a>
                <a href="#" class="action-icon" @click.prevent="removeItem(item.id)"><i class="ti ti-close"></i></a>
              </td>
            </tr>
            <!-- Offers -->
            <tr v-for="(offer, index) in activeOffers" :key="`offer${index}`">
              <td class="title">
                <span class="name">{{ offer.name }}</span>
                <span v-if="offer.type === 'FREE_PRODUCT'" class="caption text-muted">{{ menuItems.find(o => o.id === offer.freeProductId).name }}</span>
              </td>
              <td class="price text-success">{{ offer.type === 'DISCOUNT' ? `-${getCurrency(productsTotal * offer.discountValue)}` : getCurrency(0) }}</td>
              <td class="actions"></td>
            </tr>
            <!-- Discount -->
            <tr v-if="discountCoupon">
              <td class="title">
                <span class="name">{{ discountCoupon.name }}</span>
              </td>
              <td class="price text-success">{{ `-${getCurrency(productsTotal * discountCoupon.value)}` }}</td>
              <td class="actions"></td>
            </tr>
          </tbody>
        </table>
        <b-alert v-if="productsTotal < minimumCartValue && isOpen" show variant="warning"
          >Minimum order value not reached: <strong>{{ getCurrency(minimumCartValue) }}</strong></b-alert
        >
        <b-alert v-if="!isOpen" show variant="danger">Our restaurant is currently closed.</b-alert>
        <div class="cart-table-summary">
          <b-row>
            <b-col cols="7" class="text-right text-muted">Products total:</b-col>
            <b-col cols="5">
              <strong>{{ getCurrency(productsTotal) }}</strong>
            </b-col>
          </b-row>
          <b-row v-if="discountsTotal > 0">
            <b-col cols="7" class="text-right text-muted">Discounts total:</b-col>
            <b-col cols="5">
              <strong class="text-success">-{{ getCurrency(discountsTotal) }}</strong>
            </b-col>
          </b-row>
          <b-row v-if="checkout && checkout.deliveryArea && checkout.deliveryArea.deliveryCost">
            <b-col cols="7" class="text-right text-muted">Devliery:</b-col>
            <b-col cols="5">
              <strong>{{ getCurrency(checkout.deliveryArea.deliveryCost) }}</strong>
            </b-col>
          </b-row>
          <hr class="hr-sm" />
          <b-row class="text-lg">
            <b-col cols="7" class="text-right text-muted">Total:</b-col>
            <b-col cols="5">
              <strong>{{ getCurrency(orderTotal) }}</strong>
            </b-col>
          </b-row>
        </div>
      </template>
      <div v-if="items.length === 0" class="cart-table-empty">
        <i class="ti ti-shopping-cart"></i>
        <p>Your cart is empty...</p>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
/**
 * Table with items added to cart. It allows to remove and edit an item.
 */
export default {
  name: 'SCartTable',
  computed: {
    ...mapState('settings', ['minimumCartValue', 'isOpen']),
    ...mapGetters('cart', ['showPanel', 'items', 'orderTotal', 'productsTotal', 'discountsTotal', 'checkout', 'discountCoupon']),
    ...mapGetters('menu', ['activeOffers']),
    menuItems() {
      return this.$store.getters['menu/items']
    }
  },
  methods: {
    ...mapActions('cart', ['hidePanel', 'showModal', 'removeItem']),
    ...mapActions('menu', ['updateOffers'])
  }
}
</script>

<style lang="scss">
.cart-table-container {
  .alert {
    margin-bottom: 0;
  }
}

.cart-table {
  line-height: 1.25;
  width: 100%;

  th,
  td {
    vertical-align: middle;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid $color-line;
  }

  .title {
    .name {
      font-weight: 500;
      display: block;
    }

    .detail {
      margin-top: 0.25rem;
      font-size: 0.85rem;

      > span {
        color: $color-muted;

        + span {
          &:before {
            content: ', ';
          }
        }
      }
    }
  }

  .price {
    font-weight: 500;
  }

  .actions {
    white-space: nowrap;
    text-align: right;
  }
}

.cart-table-summary {
  padding: 1.5rem;
  line-height: 1.75;
}

.cart-table-empty {
  padding: 10vh 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: $color-muted;

  i {
    font-size: 2rem;
    display: inline-block;
    margin-bottom: 1rem;
  }
}
</style>
