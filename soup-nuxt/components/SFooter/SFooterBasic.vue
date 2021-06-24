<template>
  <footer id="footer" class="bg-dark dark">
    <b-container>
      <!-- Footer 1st Row -->
      <div class="footer-first-row row">
        <b-col lg="3">
          <!-- Module - Logo -->
          <template v-if="footerModules.indexOf('LOGO') !== -1">
            <div v-if="footerLogo" class="module-logo">
              <img :src="footerLogo" alt="" class="mt-5 mb-5" />
            </div>
          </template>
        </b-col>
        <b-col lg="4" mg="6">
          <!-- Module - Latest Posts -->
          <template v-if="footerModules.indexOf('LATEST_POSTS') !== -1">
            <h5 class="text-muted">Latest posts</h5>
            <ul class="list-posts">
              <li v-for="(post, index) in posts.slice(0, 3)" :key="index">
                <nuxt-link class="title" :to="{ name: 'blog-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
                <span class="date">{{ $moment(post.createdAt).format('MMMM DD, YYYY') }}</span>
              </li>
            </ul>
          </template>
          <!-- Module - Open Hours -->
          <template v-if="footerModules.indexOf('OPEN_HOURS') !== -1">
            <h5 class="text-muted">Open Hours</h5>
            <b-row v-for="(item, key) in openHours" :key="key" class="mb-1">
              <b-col xs="6">
                <strong>{{ getDaysRange(item.days) }}</strong>
              </b-col>
              <b-col xs="6">{{ item.openHour }} - {{ item.closeHour }}</b-col>
            </b-row>
          </template>
        </b-col>
        <b-col lg="5" mg="6">
          <!-- Module - Newsletter -->
          <template v-if="footerModules.indexOf('NEWSLETTER') !== -1">
            <h5 class="text-muted mb-3">Subscribe Us!</h5>
            <client-only>
              <ValidationObserver v-slot="{ handleSubmit }" ref="form">
                <form @submit.prevent="handleSubmit(subscribe)" class="sign-up-form mb-5">
                  <ValidationProvider name="E-mail" rules="required|email" v-slot="v">
                    <b-input-group>
                      <b-form-input type="email" v-model="email" placeholder="Tap your e-mail..." name="email" :state="getInputState(v)" />
                      <s-button type="submit">Subscribe</s-button>
                    </b-input-group>
                  </ValidationProvider>
                  <b-alert v-if="subscribeReply && subscribeReply !== 'ERROR'" show variant="success">{{ subscribeReply }}</b-alert>
                  <b-alert v-show="subscribeReply && subscribeReply === 'ERROR'" show variant="danger">Please try again later...</b-alert>
                </form>
              </ValidationObserver>
            </client-only>
          </template>
          <!-- Module - Social Media -->
          <template v-if="footerModules.indexOf('SOCIAL_MEDIA') !== -1 && socialMedia && socialMedia.length > 0">
            <h5 class="text-muted mb-3">Social Media</h5>
            <s-social-media :media="socialMedia" />
          </template>
        </b-col>
      </div>
      <!-- Footer 2nd Row -->
      <div class="footer-second-row">
        <span class="text-muted">Copyright {{ name }} {{ new Date().getFullYear() }}©. Made with love by <a href="http://suelo.pl" target="_blank">Suelo</a>.</span>
      </div>
    </b-container>

    <!-- Back To Top -->
    <a href="#" id="back-to-top"><i class="ti ti-angle-up"></i></a>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import inputState from '../../mixins/inputState'

/**
 * Basic footer with available customizable modules to show.
 */
export default {
  name: 'SFooterBasic',
  mixins: [inputState],
  components: {
    SButton: () => import('@/components/SButton/SButton'),
    SSocialMedia: () => import('@/components/SSocialMedia'),
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      email: '',
      posts: [],
      subscribeReply: null
    }
  },
  async fetch() {
    if (this.footerModules.indexOf('LATEST_POSTS') !== -1) this.posts = await this.$axios.$get('/blog')
  },
  computed: {
    ...mapState('settings', ['name', 'address', 'socialMedia', 'openHours']),
    ...mapState('theme', ['footerLogo', 'footerModules'])
  },
  methods: {
    getDay(day) {
      const date = this.$moment().day(day)
      return date.format('dddd')
    },
    subscribe() {
      this.$axios
        .$post('/newsletter/subscribe', {
          email: this.email
        })
        .then(response => {
          this.email = ''
          this.$nextTick(() => {
            this.$refs.form.reset()
            this.subscribeReply = response.message

            setTimeout(() => {
              this.subscribeReply = null
            }, 5000)
          })
        })
        .catch(error => {
          this.subscribeReply = 'ERROR'

          setTimeout(() => {
            this.subscribeReply = null
          }, 5000)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  @include media('<=xs') {
    padding-bottom: 2rem;
  }

  .module-logo {
    text-align: center;

    img {
      max-height: 110px;
      max-width: 80%;
    }
  }

  .footer-first-row {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;

    @include media('<=xl') {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  .footer-second-row {
    border-top: 1px solid $color-line-light;
    font-size: 0.9em;
    padding-top: 3rem;
    padding-bottom: 3rem;

    @include media('<=xl') {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
}

/* Back to top */

#back-to-top {
  @include transition-primary;
  position: absolute;
  bottom: 18px;
  right: 18px;
  border-radius: 50%;
  color: white;
  width: 36px;
  height: 36px;
  background: rgba(black, 0.15);
  font-size: 14px;
  z-index: 650;

  @include media('<=sm') {
    bottom: 20px;
    right: 20px;
  }

  &:hover {
    transform: translateY(-3px);
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
