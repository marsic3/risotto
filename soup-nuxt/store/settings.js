import Vue from 'vue'

export const state = () => ({
  name: 'Soup',
  address: null,
  currency: 'RSD',
  currencySymbol: 'rsd',
  deliveryAreas: null,
  deliveryTimeOptions: null,
  isOpen: false,
  minimumCartValue: 0,
  openHours: [],
  orderTypes: ['DELIVERY', 'PICKUP'],
  menuDefaultView: null,
  navigation: [],
  meta: {
    title: 'Soup',
    description: '',
    keywords: ''
  },
  socialMedia: []
})

export const getters = {}

export const mutations = {
  /**
   * Sets settings state
   */
  SET_STATE(state, payload) {
    Object.keys(payload).forEach(item => {
      Vue.set(state, item, payload[item])
    })
  }
}

export const actions = {
  /**
   * Gets settings from API
   */
  async fetchSettings({ commit }) {
    const data = await this.$axios
      .$get('/settings')
      .then(response => {
        commit('SET_STATE', response)
      })
      .catch(error => {
        console.error('[API] Error while getting /settings')
      })
  }
}
