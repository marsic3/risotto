<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title title="Checkout" theme="dark" />

    <!-- Page Content -->
    <page-content class="bg-light">
      <client-only>
        <b-container>
          <b-row class="flex-md-row-reverse">
            <!-- Cart -->
            <b-col md="4">
              <div class="shadow bg-body stick-to-content mb-4">
                <div class="bg-dark dark p-4"><h5 class="mb-0">Your order</h5></div>
                <!-- Cart Table -->
                <cart-table />
              </div>
            </b-col>
            <!-- Form -->
            <b-col md="8" v-if="mounted">
              <ValidationObserver v-slot="{ invalid }">
                <form>
                  <div class="bg-body p-4 p-md-5 mb-4">
                    <!-- Payment -->
                    <h4 class="border-bottom pb-4"><i class="ti ti-shopping-cart mr-3 text-primary"></i>Order Type</h4>
                    <b-row class="text-lg mb-5">
                      <b-col md="4" sm="6">
                        <b-form-group>
                          <s-form-radio id="type-delivery" value="DELIVERY" v-model="checkoutPrototype.orderType">Delivery</s-form-radio>
                        </b-form-group>
                      </b-col>
                      <b-col md="4" sm="6">
                        <b-form-group>
                          <s-form-radio id="type-pickup" value="PICKUP" v-model="checkoutPrototype.orderType">Pickup</s-form-radio>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic informations</h4>
                    <b-row class="mb-5">
                      <b-col sm="6">
                        <b-form-group label="Name: *">
                          <ValidationProvider name="Name" rules="required|min:2" v-slot="v">
                            <b-form-input v-model="checkoutPrototype.name" name="name" :state="getInputState(v)" />
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                      <b-col sm="6">
                        <b-form-group label="Street and number: *">
                          <ValidationProvider name="StreetAndNumber" rules="required|min:2" v-slot="v">
                            <b-form-input v-model="checkoutPrototype.street" name="streetAndNumber" :state="getInputState(v)" />
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                      <b-col sm="6">
                        <b-form-group label="Phone: *">
                          <ValidationProvider name="Phone" rules="required|min:2" v-slot="v">
                            <b-form-input v-model="checkoutPrototype.phone" rules="'required|min:6'" name="phone" :state="getInputState(v)" />
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                      <b-col sm="6">
                        <b-form-group label="E-mail: *">
                          <ValidationProvider name="Email" rules="required|min:2" v-slot="v">
                            <b-form-input v-model="checkoutPrototype.email" rules="'required|email'" name="email" :state="getInputState(v)" />
                          </ValidationProvider>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- Delivery -->
                    <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>{{ checkoutPrototype.orderType === 'DELIVERY' ? 'Delivery' : 'Pickup' }}</h4>
                    <b-row class="mb-5">
                      <b-col sm="6" v-if="deliveryTimeOptions">
                        <b-form-group :label="`${checkoutPrototype.orderType === 'DELIVERY' ? 'Delivery' : 'Pickup'} time:`">
                          <s-form-select v-model="checkoutPrototype.deliveryTime" :options="deliveryTimeOptions" name="deliveryTime" />
                        </b-form-group>
                      </b-col>
                      <b-col sm="6" v-if="checkoutPrototype.orderType === 'DELIVERY'">
                        <b-form-group label="Access code:">
                          <b-form-input v-model="checkoutPrototype.accessCode" name="accessCode" />
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- Payment -->
                    <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                    <b-row class="text-lg">
                      <b-col md="4" sm="6">
                        <b-form-group>
                          <s-form-radio id="payment-online" value="ONLINE" v-model="checkoutPrototype.paymentMethod">Online</s-form-radio>
                        </b-form-group>
                      </b-col>
                      <b-col md="4" sm="6">
                        <b-form-group>
                          <s-form-radio id="payment-cash" value="CASH" v-model="checkoutPrototype.paymentMethod">Cash</s-form-radio>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <!-- Discount -->
                    <b-form-group class="mt-4" :label="discountCoupon ? null : 'Have a discount code?'">
                      <b-input-group v-if="!discountCoupon">
                        <b-form-input v-model="discountCode" placeholder="Discount Code" />
                        <s-button type="submit" :disabled="discountCode.length < 3" @click.native.prevent="submitDiscount">Submit</s-button>
                      </b-input-group>
                      <b-alert v-if="discountError" show variant="warning">This discount code does not exist.</b-alert>
                      <b-alert v-else-if="discountCoupon" show variant="success">
                        You've got a <strong>{{ discountCoupon.name }}</strong> coupon!
                      </b-alert>
                    </b-form-group>
                    <b-row class="justify-content-center text-center mt-5">
                      <b-col md="7" sm="8">
                        <template v-if="!invalid && productsTotal >= minimumCartValue && isOpen">
                          <!-- PayPal Checkout -->
                          <paypal-checkout v-if="checkoutPrototype.paymentMethod === 'ONLINE'" env="sandbox" :amount="orderTotal + ''" :currency="currency" locale="en_US" :client="paypal" @payment-completed="order" :button-style="paypalButtonStyle" />
                          <!-- Order Button -->
                          <s-button block v-else variant="secondary" :disabled="items.length === 0 || invalid || productsTotal <= minimumCartValue || !isOpen" @click="order">Order Now!</s-button>
                        </template>
                        <template v-else>
                          <b-alert v-if="invalid && isOpen" show variant="info">Fill required fields to preceed to the payment.</b-alert>
                          <b-alert v-if="productsTotal < minimumCartValue && isOpen" show variant="warning"
                            >Minimum order value not reached: <strong>{{ getCurrency(minimumCartValue) }}</strong></b-alert
                          >
                          <b-alert v-if="!isOpen" show variant="danger">Our restaurant is currently closed.</b-alert>
                        </template>
                        <p class="text-xs text-center text-muted mt-3 mb-0">* Those fields are required.</p>
                      </b-col>
                    </b-row>
                  </div>
                  <b-alert v-if="isDemo" show variant="warning" class="text-center"><strong>Note!</strong> It is the demo and you will note receive any food even after the payment :)</b-alert>
                  <b-row class="justify-content-center text-center">
                    <b-col md="6" sm="8">
                      <p class="mt-3 text-xs text-muted">By placing your order you accept our <nuxt-link to="/terms">Terms &amp; Conditions</nuxt-link>.</p>
                    </b-col>
                  </b-row>
                </form>
              </ValidationObserver>
            </b-col>
          </b-row>
        </b-container>
      </client-only>
    </page-content>
  </s-content>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import inputState from '@/mixins/inputState'

export default {
  name: 'Checkout',
  mixins: [inputState],
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SPageTitle: () => import('@/components/SLayout/SPageTitle'),
    PageContent: () => import('@/components/SLayout/SPageContent'),
    SButton: () => import('@/components/SButton/SButton'),
    SFormSelect: () => import('@/components/SForm/SFormSelect'),
    SFormRadio: () => import('@/components/SForm/SFormRadio'),
    CartTable: () => import('@/components/SCart/SCartTable'),
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      isDemo: process.env.DEMO_MODE === 'true',
      isPayPalLive: process.env.PAYPAL_LIVE_MODE === 'true',
      paypal: {
        sandbox: process.env.PAYPAL_LIVE_MODE === 'true' ? process.env.PAYPAL_CLIENT_ID_LIVE : process.env.PAYPAL_CLIENT_ID_SANDBOX
      },
      discountCode: '',
      discountError: false,
      mounted: false,
      checkoutPrototype: {}
    }
  },
  watch: {
    checkoutPrototype: {
      handler() {
        this.SET_CHECKOUT(_.merge({}, this.checkoutPrototype))
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters('cart', ['checkout', 'items', 'discountCoupon', 'deliveryCost', 'orderTotal', 'productsTotal']),
    ...mapState('settings', ['deliveryAreas', 'deliveryTimeOptions', 'minimumCartValue', 'isOpen', 'currency', 'orderTypes']),
    ...mapState('theme', ['themeInverted']),
    ...mapGetters('menu', ['activeOffers']),
    paypalButtonStyle() {
      return {
        height: 50,
        size: 'responsive',
        shape: 'rect',
        color: this.themeInverted ? 'white' : 'black',
        label: 'pay',
        tagline: false
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.checkout) {
        this.checkoutPrototype = Object.assign({}, this.checkout)
      } else {
        this.checkoutPrototype = {
          orderType: this.orderTypes[0],
          deliveryArea: this.deliveryAreas[0],
          deliveryTime: this.deliveryTimeOptions[0],
          paymentMethod: 'ONLINE',
          deliveryTime: 'As fast as possible'
        }
      }
      this.mounted = true
    }, 500)
  },
  methods: {
    ...mapMutations('cart', ['REMOVE_ITEM', 'SET_CHECKOUT', 'SET_DISCOUNT_COUPON', 'SET_ORDER_STATUS', 'SET_ORDER_MESSAGE']),
    ...mapActions('cart', ['showModal']),
    order() {
      this.$axios
        .$post('/checkout/order', {
          ...this.checkoutPrototype,
          activeOffersIds: this.activeOffers && this.activeOffers.length > 0 ? this.activeOffers.map(o => o.id) : null,
          discountCoupon: this.discountCoupon || null
        })
        .then(response => {
          this.SET_ORDER_MESSAGE(response.message)
          this.SET_ORDER_STATUS('SUCCESS')
          this.$router.replace('/checkout-success')
        })
        .catch(() => {
          this.SET_ORDER_STATUS('ERROR')
          this.$router.replace('/checkout-error')
        })
    },
    submitDiscount() {
      this.$axios
        .$post(`/checkout/discount?code=${this.discountCode}`)
        .then(response => {
          this.discountError = false
          this.SET_DISCOUNT_COUPON(response)
        })
        .catch(() => {
          this.discountError = true
        })
    }
  }
}
</script>
