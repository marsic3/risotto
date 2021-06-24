<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title title="Blog" theme="light" bg="light" />

    <!-- Section -->
    <s-section bg="light" class="pt-0">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="10">
            <blog-post v-for="(post, index) in posts" :key="index" :post="post" />
          </b-col>
        </b-row>
      </b-container>
    </s-section>
  </s-content>
</template>

<script>
import { mapGetters } from 'vuex'
import animations from '@/mixins/animations'

export default {
  name: 'Blog',
  mixins: [animations],
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SPageTitle: () => import('@/components/SLayout/SPageTitle'),
    SSection: () => import('@/components/SSection'),
    BlogPost: () => import('@/components/SBlog/SBlogPost')
  },
  async asyncData({ $axios }) {
    const posts = await $axios
      .$get('/blog')
      .then(response => {
        return response
      })
      .catch(() => {
        console.error(`[API] Error while getting /blog`)
        return []
      })

    return {
      posts: posts
    }
  }
}
</script>
