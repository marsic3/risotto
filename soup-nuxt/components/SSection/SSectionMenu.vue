<template>
  <s-section>
    <b-container>
      <h1 v-if="title" class="section-header text-center">{{ title }}</h1>
      <b-row class="justify-content-center">
        <b-col lg="8">
          <client-only>
            <carousel class="carousel" :perPage="1" :paginationSize="6" paginationColor="currentColor" paginationActiveColor="currentColor">
              <!-- Special Offer -->
              <slide v-for="(id, index) in categories" :key="index">
                <!-- Menu Category -->
                <menu-category class="mb-0" :image="categoryById(id).image" :name="categoryById(id).name">
                  <!-- Menu Item -->
                  <menu-list-item v-for="(item, itemIndex) in itemsByCategoryId(id)" :key="itemIndex" :item="item" />
                </menu-category>
              </slide>
            </carousel>
          </client-only>
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
 * Section with menu categories and items
 */
export default {
  name: 'SSectionMenu',
  mixins: [section],
  components: {
    SSection,
    MenuCategory: () => import('@/components/SMenu/SMenuCategory'),
    MenuListItem: () => import('@/components/SMenu/SMenuListItem')
  },
  props: {
    /**
     * Section's title
     */
    title: {
      type: String,
      required: true,
      default: 'Sample title'
    },
    /**
     * Categories ID's to display with their items (will display all categories if empty)
     */
    categories: {
      type: [Array]
    }
  },
  computed: {
    ...mapGetters('menu', ['itemsByCategoryId', 'categoryById'])
  },
  data() {
    return {
      showVideo: false
    }
  }
}
</script>

<style></style>
