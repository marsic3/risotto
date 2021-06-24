<template>
  <div ref="parent" class="sticky-sidebar">
    <div class="sticky-sidebar-inner" ref="children">
      <!-- @slot Content to stick to the screen -->
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * Sidebar element which sticks to the top of the screen until reached the footer
 */
export default {
  name: 'SStickySidebar',
  data() {
    return {
      offsetTop: 0,
      width: 0
    }
  },
  methods: {
    offset(el) {
      let rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return rect.top + scrollTop
    },
    handleScroll() {
      if (window.innerWidth >= 991) {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop
        let el = this.$refs.children
        let footer = document.getElementById('footer')

        this.offsetTop = this.offset(this.$refs.parent)
        this.width = this.$refs.children.clientWidth

        if (scrolled > this.offsetTop) {
          el.style.position = 'fixed'
          el.style.top = 0
          el.style.width = `${this.width}px`
        } else {
          el.removeAttribute('style')
        }

        if (scrolled > this.offset(footer) - el.clientHeight) {
          el.style.position = 'absolute'
          el.style.top = `${this.offset(footer) - el.clientHeight - this.offset(el)}px`
        }
      }
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style></style>
