import _ from 'lodash'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const state = () => ({
  items: [],
  checkout: null,
  activeItem: null,
  showPanel: false,
  showModal: false,
  discountCoupon: null,
  modalMode: 'ADD',
  orderStatus: 'NONE',
  orderMessage: null
})

export const getters = {
  items: state => state.items,
  checkout: state => state.checkout,
  productsTotal: state => {
    let total = 0
    state.items.forEach(item => (total += item.totalPrice))
    return total
  },
  discountsTotal: (state, getters, rootState, rootGetters) => {
    let total = 0
    let activeOffers = rootGetters['menu/activeOffers']
    if (activeOffers && activeOffers.length > 0) {
      activeOffers.forEach(item => (item.type === 'DISCOUNT' ? (total += getters['productsTotal'] * item.discountValue) : 0))
    }
    if (state.discountCoupon) {
      total += getters['productsTotal'] * state.discountCoupon.value
    }
    return total
  },
  discountCoupon: state => state.discountCoupon,
  deliveryCost: state => (state.checkout && state.checkout.deliveryArea ? state.checkout.deliveryArea.deliveryCost : 0),
  orderTotal: (state, getters) => getters.productsTotal + (state.checkout && state.checkout.deliveryArea ? state.checkout.deliveryArea.deliveryCost : 0) - getters.discountsTotal,
  activeItem: state => state.activeItem,
  showPanel: state => state.showPanel,
  showModal: state => state.showModal,
  modalMode: state => state.modalMode
}

export const mutations = {
  /**
   * Shows cart panel
   */
  SHOW_PANEL(state) {
    state.showPanel = true
  },
  /**
   * Hides cart panel
   */
  HIDE_PANEL(state) {
    state.showPanel = false
  },
  /**
   * Shows cart modal
   */
  SHOW_MODAL(state) {
    state.showModal = true
  },
  /**
   * Hides cart modal
   */
  HIDE_MODAL(state) {
    state.showModal = false
  },
  /**
   * Sets modal mode (ADD or EDIT)
   */
  SET_MODAL_MODE(state, payload) {
    state.modalMode = payload
  },
  /**
   * Sets active menu item
   */
  SET_ACTIVE_ITEM(state, payload) {
    state.activeItem = _.merge({}, payload)
    if (!state.activeItem.activeAdditions) state.activeItem.activeAdditions = []
    if (!state.activeItem.activeOptions && state.activeItem.options && state.activeItem.options.length > 0) {
      state.activeItem.activeOptions = []
      state.activeItem.options.map((o, index) => {
        state.activeItem.activeOptions[index] = {
          id: o.id,
          name: o.name,
          value: o.list[0]
        }
      })
    }
  },
  /**
   * Resets active menu item
   */
  RESET_ACTIVE_ITEM(state) {
    state.activeItem = null
  },
  /**
   * Sets active item options
   */
  SET_ACTIVE_ITEM_OPTIONS(state, payload) {
    state.activeItem.activeOptions[payload.index].value = payload.option

    let optionsTotal = 0
    state.activeItem.activeOptions.forEach(item => {
      optionsTotal += item.value.price
    })

    state.activeItem.totalOptions = optionsTotal
    state.activeItem.totalPrice = state.activeItem.price + (state.activeItem.totalOptions || 0) + (state.activeItem.totalAdditions || 0)
  },
  /**
   * Sets active item additions
   */
  SET_ACTIVE_ITEM_ADDITIONS(state, payload) {
    state.activeItem.activeAdditions = payload

    let additionsTotal = 0
    payload.forEach(item => {
      additionsTotal += item.price
    })

    state.activeItem.totalAdditions = additionsTotal
    state.activeItem.totalPrice = state.activeItem.price + (state.activeItem.totalOptions || 0) + (state.activeItem.totalAdditions || 0)
  },
  /**
   * Sets active item other informations
   */
  SET_ACTIVE_ITEM_OTHER(state, payload) {
    state.activeItem.other = payload
  },
  /**
   * Adds item to cart
   */
  ADD_ITEM(state, payload) {
    let item = {
      _ref: new Date().getTime(),
      ...payload
    }
    state.items.push(item)
  },
  /**
   * Removes item from cart
   */
  REMOVE_ITEM(state, payload) {
    let index = state.items.findIndex(item => item.id === payload)
    state.items.splice(index, 1)
  },
  /**
   * Sets menu item in cart
   */
  SET_ITEM(state, payload) {
    let index = state.items.findIndex(item => item._ref === payload.ref)
    state.items.splice(index, 1, payload.data)
  },
  /**
   * Sets order status
   */
  SET_ORDER_STATUS(state, payload) {
    state.orderStatus = payload
  },
  /**
   * Sets order message
   */
  SET_ORDER_MESSAGE(state, payload) {
    state.orderMessage = payload
  },
  /**
   * Sets checkout object
   */
  SET_CHECKOUT(state, payload) {
    state.checkout = payload
  },
  /**
   * Resets cart data
   */
  RESET_CART(state, payload) {
    state.orderStatus = 'NONE'
    state.items = []
    state.checkout = null
    state.discountCoupon = null
  },
  /**
   * Sets discount coupon
   */
  SET_DISCOUNT_COUPON(state, payload) {
    state.discountCoupon = payload
  }
}

export const actions = {
  /**
   * Shows panel with overlay
   */
  showPanel({ commit }) {
    commit('SHOW_PANEL')
    commit('shell/SHOW_BODY_OVERLAY', null, { root: true })
    disableBodyScroll(document.querySelector('#cart'))
  },
  /**
   * Hides panel with overlay
   */
  hidePanel({ commit }) {
    commit('HIDE_PANEL')
    commit('shell/HIDE_BODY_OVERLAY', null, { root: true })
    enableBodyScroll(document.querySelector('#cart'))
  },
  /**
   * Shows cart modal ands sets active item
   */
  showModal({ state, commit, rootState }, payload) {
    commit('SET_MODAL_MODE', payload.mode)
    if (payload.mode === 'ADD') {
      if (payload.item) {
        commit('SET_ACTIVE_ITEM', payload.item)
      } else if (payload.itemId) {
        const item = rootState.menu.items.find(o => o.id === payload.itemId)
        if (item) {
          commit(
            'SET_ACTIVE_ITEM',
            rootState.menu.items.find(o => o.id === payload.itemId)
          )
        } else {
          console.error(`Can't item with this hash with the menu: ${payload.itemId}`)
        }
      }
      if (state.activeItem) {
        commit('SHOW_MODAL')
      }
    } else if (payload.mode === 'EDIT') {
      commit(
        'SET_ACTIVE_ITEM',
        state.items.find(o => o._ref === payload.item._ref)
      )
      commit('SHOW_MODAL')
    }
  },
  /**
   * Hides cart modal
   */
  hideModal({ commit }) {
    commit('HIDE_MODAL')
  },
  /**
   * Adds item to cart manages other carts components
   */
  addItem({ commit, dispatch }, payload) {
    commit('ADD_ITEM', payload)
    dispatch('hideModal')
    dispatch('showPanel')
    dispatch('menu/updateOffers', null, { root: true })
  },
  /**
   * Removes item from cart and other dependencies
   */
  removeItem({ commit, dispatch }, payload) {
    commit('REMOVE_ITEM', payload)
    dispatch('menu/updateOffers', null, { root: true })
  },
  /**
   * Updates item in cart and other dependencies
   */
  updateItem({ commit, dispatch }, payload) {
    commit('SET_ITEM', payload)
    dispatch('hideModal')
    dispatch('menu/updateOffers', null, { root: true })
  }
}
