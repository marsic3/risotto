import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const state = () => ({
  showBodyOverlay: false,
  isDropdownVisible: false,
  showMobilePanel: false,
  isHeaderTransparent: false,
  showHeaderLogo: true
})

export const mutations = {
  /**
   * Shows body overlay
   */
  SHOW_BODY_OVERLAY(state) {
    state.showBodyOverlay = true
  },
  /**
   * Hides body overlay
   */
  HIDE_BODY_OVERLAY(state) {
    state.showBodyOverlay = false
  },
  /**
   * Shows mobile navigaiton panel
   */
  SHOW_MOBILE_PANEL(state) {
    state.showBodyOverlay = true
    state.showMobilePanel = true
    disableBodyScroll(document.querySelector('#panel-mobile'))
  },
  /**
   * Hides mobile navigaiton panel
   */
  HIDE_MOBILE_PANEL(state) {
    state.showBodyOverlay = false
    state.showMobilePanel = false
    enableBodyScroll(document.querySelector('#panel-mobile'))
  },
  /**
   * Sets dropdown visibility
   */
  SET_DROPDOWN_VISIBILITY(state, payload) {
    state.isDropdownVisible = payload
  },
  /**
   * Sets transparent header
   */
  SET_HEADER_TRANSPARENT(state, payload) {
    state.isHeaderTransparent = payload
  },
  /**
   * Sets header logo visibility
   */
  SET_HEADER_LOGO_VISIBILITY(state, payload) {
    state.showHeaderLogo = payload
  }
}
