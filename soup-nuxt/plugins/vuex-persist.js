import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: window.localStorage,
      reducer: state => ({
        cart: {
          items: state.cart.items,
          checkout: state.cart.checkout,
          discountCoupon: state.cart.discountCoupon
        }
      })
    }).plugin(store)
  })
}
