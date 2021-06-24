<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title title="Our Menu" />

    <!-- Page Content -->
    <page-content>
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="10">
            <!-- Menu Category -->
            <menu-category v-for="(category, categoryIndex) in categories" :id="category.name.replace(/\s/g, '')" :key="categoryIndex" :image="category.image" :name="category.name" :collapsible="true" :open="categoryIndex === 0">
              <!-- Menu Item -->
              <menu-list-item v-for="(item, itemIndex) in itemsByCategoryId(category.id)" :key="itemIndex" :item="item" />
            </menu-category>
          </b-col>
        </b-row>
      </b-container>
    </page-content>
  </s-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuListNavigation',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SPageTitle: () => import('@/components/SLayout/SPageTitle'),
    PageContent: () => import('@/components/SLayout/SPageContent'),
    MenuCategory: () => import('@/components/SMenu/SMenuCategory'),
    MenuListItem: () => import('@/components/SMenu/SMenuListItem')
  },
  computed: {
    ...mapGetters('menu', ['categories', 'itemsByCategoryId'])
  }
}
</script>
