<template>
  <s-section :bg="bg" :theme="theme">
    <b-container>
      <h1 class="section-header text-center">{{ title }}</h1>
      <b-row class="justify-content-center">
        <b-col lg="10">
          <client-only>
            <carousel class="carousel" :perPage="1" :paginationSize="6" paginationColor="currentColor" paginationActiveColor="currentColor">
              <!-- Special Offer -->
              <slide v-for="(post, index) in itemsToShow" :key="index">
                <blog-post :post="post" />
              </slide>
            </carousel>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with latest posts displayed in the slider
 */
export default {
  name: 'SSectionLatestPosts',
  mixins: [section],
  components: {
    SSection,
    BlogPost: () => import('@/components/SBlog/SBlogPost')
  },
  props: {
    /**
     * Section's title
     */
    title: {
      type: String,
      required: false
    },
    /**
     * Posts to display
     */
    items: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      itemsToShow: []
    }
  },
  async fetch() {
    this.itemsToShow = this.items || (await this.$axios.$get('/blog'))
  }
}
</script>

<style></style>
