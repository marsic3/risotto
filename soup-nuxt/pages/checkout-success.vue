<template>
  <!-- Content -->
  <s-content class="bg-light">
    <!-- Page Content -->
    <s-section size="lg" bg="light">
      <b-container>
        <b-row>
          <b-col lg="8" :offset-lg="headerLogoStyle === 'VERTICAL' ? 4 : 0">
            <span class="icon icon-xl icon-success">
              <i class="ti ti-check-box"></i>
            </span>
            <h1 class="mb-3">Thank you for you order!</h1>
            <p class="lead text-muted mb-5">{{ orderMessage }}</p>
            <s-button variant="secondary" to="/">Back to Home</s-button>
          </b-col>
        </b-row>
      </b-container>
    </s-section>
  </s-content>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CheckoutSuccess',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SButton: () => import('@/components/SButton/SButton'),
    SSection: () => import('@/components/SSection/SSection')
  },
  computed: {
    ...mapState('cart', ['orderMessage']),
    ...mapState('theme', ['headerLogoStyle'])
  },
  mounted() {
    setTimeout(() => {
      this.RESET_CART()
    }, 500)
  },
  methods: {
    ...mapMutations('cart', ['RESET_CART'])
  },
  middleware: 'order-success'
}
</script>
