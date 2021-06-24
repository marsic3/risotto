<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title title="Our Menu" />

    <!-- Page Content -->
    <page-content>
      <b-container>
        <b-row no-gutters>
          <b-col lg="3">
            <!-- Menu Navigation -->
            <menu-navigation>
              <li v-for="(category, categoryIndex) in categories" :key="categoryIndex">
                <a href="#" v-scroll-to="`#${category.name.replace(/\s/g, '')}`">{{ category.name }}</a>
              </li>
            </menu-navigation>
          </b-col>
          <b-col lg="9">
            <!-- Menu Category -->
            <menu-category v-for="(category, categoryIndex) in categories" :id="category.name.replace(/\s/g, '')" :key="categoryIndex" :image="category.image" :name="category.name" padded>
              <b-row class="gutters-sm">
                <!-- Menu Item -->
                <b-col lg="4" cols="6" v-for="(item, itemIndex) in itemsByCategoryId(category.id)" :key="itemIndex">
                  <menu-grid-item :item="item" />
                </b-col>
              </b-row>
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
    MenuGridItem: () => import('@/components/SMenu/SMenuGridItem'),
    MenuNavigation: () => import('@/components/SMenu/SMenuNavigation')
  },
  computed: {
    ...mapGetters('menu', ['categories', 'itemsByCategoryId'])
  }
}
</script>
