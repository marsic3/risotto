require('dotenv').config()
import axios from 'axios'

export default async () => {
  const settings = await axios.get(`${process.env.API_URL}/settings`)

  return {
    mode: 'universal',
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    },
    /*
     ** Envronment Variables
     */
    env: {
      API_URL: process.env.API_URL,
      MAP_API_KEY: process.env.MAP_API_KEY,
      PAYPAL_LIVE_MODE: process.env.PAYPAL_CLIENT_LIVE_MODE || false,
      PAYPAL_CLIENT_ID_SANDBOX: process.env.PAYPAL_CLIENT_ID_SANDBOX,
      PAYPAL_CLIENT_ID_LIVE: process.env.PAYPAL_CLIENT_ID_LIVE,
      DEMO_MODE: process.env.DEMO_MODE || false
    },
    /*
     ** Customize the loader
     */
    loading: '~/components/SLoading',
    /*
     ** Global CSS
     */
    css: ['~/assets/scss/style.scss', '@icon/themify-icons/themify-icons.css', 'font-awesome/css/font-awesome.min.css', 'animate.css/animate.min.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/directives.js', '~/plugins/lodash.js', '~/plugins/global.js', { src: '~/plugins/carousel.js', mode: 'client' }, { src: '~/plugins/google-maps.js' }, { src: '~/plugins/waypoint.js', mode: 'client' }, { src: '~/plugins/validation.js', mode: 'client' }, { src: '~/plugins/vuex-persist', mode: 'client' }, { src: '~/plugins/paypal', mode: 'client' }, { src: '~/plugins/fullheight', mode: 'client' }],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/dotenv', '@nuxtjs/pwa', 'cookie-universal-nuxt', 'nuxt-webfontloader', 'bootstrap-vue/nuxt', '@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/moment', ['vue-scrollto/nuxt', { duration: 300 }]],
    /*
     ** Axios Configuration
     */
    axios: {
      baseURL: process.env.API_URL
    },
    /*
     ** Webfont Loader
     */
    webfontloader: {
      google: {
        families: ['Oswald:400,700', 'Raleway:100:200:400:500']
      }
    },
    /*
     ** Bootstrap Configuration
     */ bootstrapVue: {
      components: ['BAlert', 'BButton', 'BButtonClose', 'BButtonGroup', 'BCol', 'BCollapse', 'BContainer', 'BFormInput', 'BFormInput', 'BFormGroup', 'BFormCheckbox', 'BFormTextarea', 'BFormRadio', 'BFormRadioGroup', 'BInputGroup', 'BModal', 'BRow']
    },
    /*
     ** Style Resources
     */ styleResources: {
      scss: '~/assets/scss/_config.scss'
    },
    /*
     ** PWA configuration
     */
    pwa: {
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        name: settings.data.meta.title,
        author: 'Suelo',
        description: settings.data.meta.description,
        theme_color: '#FFFFFF'
      },
      manifest: {
        name: settings.data.meta.title,
        short_name: settings.data.meta.shortTitle,
        description: settings.data.meta.description
      }
    },
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
      transpile: [/^vue2-google-maps($|\/)/, /^vue2-gmap-custom-marker($|\/)/, 'vee-validate/dist/rules']
    }
  }
}
