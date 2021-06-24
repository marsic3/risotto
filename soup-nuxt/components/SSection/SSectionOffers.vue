<template>
  <s-section :bg="bg" :theme="theme">
    <b-container>
      <h1 v-if="title" class="section-header text-center">{{ title }}</h1>
      <client-only v-if="carousel">
        <carousel class="carousel" :perPage="1" :paginationSize="6" paginationColor="currentColor" paginationActiveColor="currentColor">
          <!-- Special Offer -->
          <slide v-for="(item, index) in itemsToShow" :key="index">
            <s-offer :item="item" />
          </slide>
        </carousel>
      </client-only>
      <template v-else>
        <!-- Special Offer -->
        <s-offer v-for="(item, index) in itemsToShow" :key="index" :item="item" />
      </template>
    </b-container>
  </s-section>
</template>

<script>
import { mapGetters } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with special offers displayd in slider or basic list
 */
export default {
  name: 'SSectionOffers',
  mixins: [section],
  components: {
    SSection,
    SOffer: () => import('@/components/SOffer/SOffer')
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
      required: false
    },
    /**
     * Set to false to display offers in list instead of carousel
     */
    carousel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      itemsToShow: []
    }
  },
  computed: {
    ...mapGetters('menu', ['offers'])
  },
  created() {
    this.itemsToShow = this.items || this.offers
  }
}
</script>

<style></style>
