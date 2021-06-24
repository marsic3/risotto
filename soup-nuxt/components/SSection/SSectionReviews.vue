<template>
  <s-section :bg="bg" :theme="theme">
    <b-container>
      <h1 v-if="title" class="section-header text-center">{{ title }}</h1>
      <b-row class="justify-content-center">
        <b-col lg="8">
          <client-only v-if="carousel">
            <carousel class="carousel" :perPage="1" :paginationSize="6" paginationColor="currentColor" paginationActiveColor="currentColor">
              <slide v-for="(review, index) in items" :key="index">
                <!-- Blockquote -->
                <s-blockquote :item="review" :odd="index % 2 === 1" :large="true" />
              </slide>
            </carousel>
          </client-only>
          <template v-else>
            <s-blockquote v-for="(review, index) in items" :key="index" :item="review" :odd="index % 2 === 1" :large="true" />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </s-section>
</template>

<script>
import { mapGetters } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with reviews displayd in slider or basic list
 */
export default {
  name: 'SSectionReviews',
  mixins: [section],
  components: {
    SSection,
    SBlockquote: () => import('@/components/SBlockquote/SBlockquote')
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
     * Offers to display
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Set to false to display offers in list instead of carousel
     */
    carousel: {
      type: Boolean,
      default: true
    }
  }
}
</script>
