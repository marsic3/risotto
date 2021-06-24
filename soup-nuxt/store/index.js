export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('settings/fetchSettings')
    await dispatch('theme/fetchTheme')
    await dispatch('menu/fetchItems')
    await dispatch('menu/fetchCategories')
    await dispatch('menu/fetchOffers')
  }
}
