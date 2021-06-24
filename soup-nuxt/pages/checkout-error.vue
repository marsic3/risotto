<template>
  <!-- Content -->
  <s-content class="bg-light">
    <!-- Page Content -->
    <s-section size="lg" bg="light">
      <b-container>
        <b-row>
          <b-col lg="8" :offset-lg="headerLogoStyle === 'VERTICAL' ? 4 : 0">
            <span class="icon icon-xl icon-danger">
              <i class="ti ti-plug"></i>
            </span>
            <h1 class="mb-3">Ooops...</h1>
            <p class="lead text-muted mb-5">It seems that we cannot place you order. Please try again later...</p>
            <s-button variant="secondary" to="/checkout">Back to Checkout</s-button>
          </b-col>
        </b-row>
      </b-container>
    </s-section>
  </s-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CheckoutSuccess',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SButton: () => import('@/components/SButton/SButton'),
    SSection: () => import('@/components/SSection/SSection')
  },
  computed: {
    ...mapState('theme', ['headerLogoStyle'])
  },
  middleware: 'order-error'
}
</script>
