import Vue from 'vue'

export const state = () => ({
  footerLogo: null,
  footerType: 'Basic',
  footerModules: [],
  headerLogoLight: null,
  headerLogoDark: null,
  headerLogoStyle: 'VERTICAL',
  headerLogoBackground: 'DARK',
  themeInverted: false,
  themeBodyPadded: true,
  themeColor: '#ddae71'
})

export const getters = {
  theme: state => state
}

export const mutations = {
  /**
   * Sets theme state
   */
  SET_STATE(state, payload) {
    Object.keys(payload).forEach(item => {
      Vue.set(state, item, payload[item])
    })
  }
}

export const actions = {
  /**
   * Gets theme from API
   */
  async fetchTheme({ commit }, id = 2) {
    const data = await this.$axios
      .$get(`/theme?id=${id}`)
      .then(response => {
        commit('SET_STATE', response)
      })
      .catch(error => {
        console.error(`[API] Error while getting /theme?id=${id}`)
      })
    return data
  }
}
