export default function({ store, redirect }) {
  if (store.state.cart.orderStatus !== 'SUCCESS') {
    return redirect('/')
  }
}
