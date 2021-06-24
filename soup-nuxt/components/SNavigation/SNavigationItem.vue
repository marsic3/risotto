<template>
  <client-only>
    <li v-if="item" :class="{ 'dropdown-show': open, 'has-dropdown': item.children && item.children.length > 0 }" v-click-outside="closeDropdown">
      <button v-if="item.children && item.children.length > 0" @click.prevent="toggleDropdown">{{ item.name }}</button>
      <a v-else-if="item.target === '_blank'" :href="item.path">{{ item.name }}</a>
      <nuxt-link v-else :to="item.path">{{ item.name }}</nuxt-link>
      <div v-if="type === 'desktop'" class="dropdown-container">
        <ul>
          <s-navigation-item v-for="(item, index) in item.children" :key="`${item.name}_${index}`" type="desktop" :item="item"></s-navigation-item>
        </ul>
        <div class="dropdown-image" v-if="item.dropdownImage">
          <img :src="item.dropdownImage.url" :alt="item.dropdownImage.title" />
        </div>
      </div>
      <slide-up-down v-else class="dropdown-container" :active="open" :duration="400">
        <ul>
          <s-navigation-item v-for="(item, index) in item.children" :key="`${item.name}_${index}`" type="mobile" :item="item"></s-navigation-item>
        </ul>
      </slide-up-down>
    </li>
  </client-only>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import { mapMutations } from 'vuex'

/**
 * Main navigation desktop.
 */
export default {
  name: 'SNavigationItem',
  components: {
    SlideUpDown
  },
  props: {
    /**
     * Item's object
     */
    item: {
      type: Object,
      required: true
    },
    /**
     * Navigation type
     * @values desktop, mobile
     */
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  watch: {
    $route() {
      this.closeDropdown()
    }
  },
  methods: {
    ...mapMutations('shell', ['SET_DROPDOWN_VISIBILITY']),
    toggleDropdown() {
      this.open = !this.open
      if (this.type === 'desktop') {
        if (this.open) {
          setTimeout(() => {
            this.SET_DROPDOWN_VISIBILITY(true)
          }, 0)
        } else this.SET_DROPDOWN_VISIBILITY(false)
      }
    },
    closeDropdown() {
      if (this.type === 'desktop' && this.open) {
        this.open = false
        this.SET_DROPDOWN_VISIBILITY(false)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.closeDropdown)
  }
}
</script>
