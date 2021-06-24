import inViewport from 'in-viewport'

export default {
  mounted() {
    let elements = document.querySelectorAll('[data-animation]')

    elements.forEach(el => {
      inViewport(el, { offset: -window.innerHeight / 4 }, e => {
        let delay = e.getAttribute('data-animation-delay') || 0
        let animation = e.getAttribute('data-animation')
        e.classList.add('visible', animation)
      })
    })
  }
}
