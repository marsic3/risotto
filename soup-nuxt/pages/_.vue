<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title v-if="pageTitle" v-bind="pageTitle" />
    <!-- Section Loader -->
    <s-section-loader v-for="(section, index) in sections" :key="index" :name="section.name" :props="section.props" />
  </s-content>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Page',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SPageTitle: () => import('@/components/SLayout/SPageTitle'),
    SSectionLoader: () => import('@/components/SSection/SSectionLoader')
  },
  async asyncData({ route, redirect, $axios }) {
    const path = route.path
    return await $axios
      .$get(`/pages${path}`)
      .then(response => {
        return response
      })
      .catch(() => {
        console.error(`[API] Error while getting /pages${path}`)
        redirect(`/500`)
        return {
          pageTitle: null,
          sections: []
        }
      })
  },
  methods: {
    ...mapMutations('shell', ['SET_HEADER_TRANSPARENT', 'SET_HEADER_LOGO_VISIBILITY'])
  },
  created() {
    if (this.settings) {
      this.SET_HEADER_TRANSPARENT(!!this.settings.headerTransparent)
      this.SET_HEADER_LOGO_VISIBILITY(!this.settings.hideHeaderLogo)
    }
  },
  beforeDestroy() {
    if (this.settings) {
      this.SET_HEADER_TRANSPARENT(!this.settings.headerTransparent)
      this.SET_HEADER_LOGO_VISIBILITY(!!this.settings.hideHeaderLogo)
    }
  }
}
</script>
