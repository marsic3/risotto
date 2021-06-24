import moment from 'moment'

export const state = () => ({
  categories: [],
  items: [],
  offers: []
})

export const getters = {
  items: state => state.items,
  categories: state => state.categories,
  categoryById: state => categoryId => state.categories.find(item => item.id === categoryId),
  itemsByCategoryId: state => categoryId => state.items.filter(item => item.categoryId === categoryId),
  offers: state => state.offers,
  activeOffers: state => {
    return state.offers.filter(o => {
      let validConditions = o.conditions.filter(p => p.active === true)
      return o.conditions.length === validConditions.length
    })
  }
}

export const mutations = {
  /**
   * Sets menu categories
   */
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  /**
   * Sets menu items
   */
  SET_ITEMS(state, payload) {
    state.items = payload
    state.items.map(o => (o.totalPrice = o.price))
  },
  /**
   * Sets menu offers
   */
  SET_OFFERS(state, payload) {
    state.offers = payload
  },
  /**
   * Updates offer condition status
   */
  UPDATE_CONDITION_STATUS(state, payload) {
    let offer = state.offers.find(o => o.id === payload.offerId)
    let condition = offer.conditions.find(o => o.id === payload.conditionId)
    condition.active = payload.active
  }
}

export const actions = {
  /**
   * Gets menu categories from API
   */
  async fetchCategories({ commit }) {
    const data = await this.$axios
      .$get('/menu/categories')
      .then(response => {
        commit('SET_CATEGORIES', response)
      })
      .catch(error => {
        console.error('[API] Error while getting /menu/categories')
      })
    return data
  },
  /**
   * Gets menu items from API
   */
  async fetchItems({ commit }) {
    const data = await this.$axios
      .$get('/menu/items')
      .then(response => {
        commit('SET_ITEMS', response)
      })
      .catch(error => {
        console.error('[API] Error while getting /menu/items')
      })
    return data
  },
  /**
   * Gets menu offers from API
   */
  async fetchOffers({ commit }) {
    const data = await this.$axios
      .$get('/menu/offers')
      .then(response => {
        commit('SET_OFFERS', response)
      })
      .catch(error => {
        console.error('[API] Error while getting /menu/offers')
      })
    return data
  },
  /**
   * Updates offers states
   */
  updateOffers({ state, commit, rootGetters }) {
    state.offers.forEach(offer => {
      offer.conditions.forEach(condition => {
        let ids = { offerId: offer.id, conditionId: condition.id }
        switch (condition.type) {
          case 'DAY':
            let today = moment().day()
            commit('UPDATE_CONDITION_STATUS', { ...ids, active: condition.value.indexOf(today) !== -1 })
            break
          case 'MINIMUM_ORDER_VALUE':
            commit('UPDATE_CONDITION_STATUS', { ...ids, active: rootGetters['cart/productsTotal'] > condition.value })
            break
          case 'CATEGORY_ID':
            let includes = false
            rootGetters['cart/items'].map(o => {
              if (condition.value.indexOf(o.categoryId) !== -1) includes = true
            })
            commit('UPDATE_CONDITION_STATUS', { ...ids, active: includes })
            break
        }
      })
    })
  }
}
