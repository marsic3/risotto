<template>
  <transition name="slide-up">
    <div v-if="showBar" class="cookies-bar">
      <b-container class="cookies-bar-container">
        <div class="cookies-bar-text">
          <h4 class="mb-2">Cookies &amp; GDPR</h4>
          <p>This is a sample Cookies / GDPR information. You can use it easily on your site and even add link to <a href="#">Privacy Policy</a>.</p>
        </div>
        <div class="cookies-bar-action">
          <s-button @click="acceptCookies">Accept</s-button>
        </div>
      </b-container>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

/**
 * Basic Cookies & GDPR bar with acceptation button.
 */
export default {
  name: 'SCartModal',
  components: {
    SButton: () => import('@/components/SButton/SButton')
  },
  data() {
    return {
      showBar: false
    }
  },
  created() {
    if (this.$cookies.get('cookies') !== 'ACCEPTED') {
      this.showBar = true
    }
  },
  methods: {
    acceptCookies() {
      this.$cookies.set('cookies', 'ACCEPTED', {
        maxAge: 60 * 60 * 24 * 365
      })
      this.showBar = false
    }
  }
}
</script>

<style lang="scss">
.cookies-bar {
  position: fixed;
  z-index: 150;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  background-color: white;
  box-shadow: 0 0 30px 0 rgba(black, 0.2);

  &-container {
    display: flex;
    align-items: center;
  }

  &-action {
    margin-left: auto;
  }

  &-text {
    @include media('>md') {
      > *:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
