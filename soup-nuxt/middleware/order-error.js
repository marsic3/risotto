export default function({ store, redirect }) {
  if (store.state.cart.orderStatus !== 'ERROR') {
    return redirect('/')
  }
}
